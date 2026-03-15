from flask import Blueprint, request, jsonify
from supabase_service import get_product_by_id, create_order, increment_sales_count
from razorpay_service import create_razorpay_order
from email_service import send_download_email
import uuid

checkout_bp = Blueprint('checkout', __name__)

@checkout_bp.route('/create-order', methods=['POST'])
def handle_create_order():
    try:
        data = request.get_json()
        
        # Validate data
        required_fields = ['name', 'email', 'dream', 'state', 'product_id']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        name = data['name']
        email = data['email']
        dream = data['dream']
        state = data['state']
        product_id = data['product_id']

        # 1. Fetch product from Supabase to get the latest dynamic price
        product = get_product_by_id(product_id)
        if not product:
            return jsonify({"error": "Product not found"}), 404
            
        # Check if product is active
        is_active = product.get('is_active', True)
        if not is_active:
            return jsonify({"error": "Product is currently inactive and cannot be purchased"}), 400

        price_in_inr = product.get('price', 0)
        
        # Razorpay requires amount in paise
        amount_in_paise = int(price_in_inr * 100)

        # Handle Free Products automatically without Razorpay
        if amount_in_paise == 0:
            free_order_id = f"free_{uuid.uuid4().hex}"
            order = create_order(
                name=name, email=email, dream=dream, state=state,
                product_id=product_id, product_price=0, razorpay_order_id=free_order_id
            )
            from supabase_service import update_order_status
            update_order_status(free_order_id, "success", "free_transaction")
            increment_sales_count(product_id)
            
            send_download_email(
                to_email=email, name=name, 
                drive_link=product.get('drive_link'), 
                product_name=product.get('product_name')
            )
            
            return jsonify({
                "order_id": free_order_id,
                "amount": 0,
                "currency": "INR",
                "is_free": True,
                "message": "Free order processed successfully. Email sent!"
            }), 200

        # 2. Create Razorpay order using that price
        receipt_id = f"rcpt_{uuid.uuid4().hex}"
        razorpay_order = create_razorpay_order(amount=amount_in_paise, receipt=receipt_id)
        razorpay_order_id = razorpay_order.get('id')
        
        if not razorpay_order_id:
            return jsonify({"error": "Failed to create Razorpay order"}), 500

        # 3. Insert a new order row in Supabase with status "pending"
        # 4. Store razorpay_order_id AND the current dynamic product_price
        order = create_order(
            name=name,
            email=email,
            dream=dream,
            state=state,
            product_id=product_id,
            product_price=price_in_inr,
            razorpay_order_id=razorpay_order_id
        )

        if not order:
            return jsonify({"error": "Failed to store order details in database"}), 500

        # 5. Return Razorpay order details to frontend
        return jsonify({
            "order_id": razorpay_order_id,
            "amount": amount_in_paise,
            "currency": "INR",
            "is_free": False
        }), 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        print(f"Error in /create-order: {e}")
        return jsonify({"error": "Internal server error"}), 500
