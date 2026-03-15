from flask import Blueprint, request, jsonify
from razorpay_service import verify_payment_signature
from supabase_service import update_order_status, get_order_by_razorpay_order_id, get_product_by_id, increment_sales_count
from email_service import send_download_email

payment_verify_bp = Blueprint('payment_verify', __name__)

@payment_verify_bp.route('/verify-payment', methods=['POST'])
def handle_verify_payment():
    try:
        data = request.get_json()
        
        required_fields = ['razorpay_order_id', 'razorpay_payment_id', 'razorpay_signature']
        for field in required_fields:
            if field not in data or not data[field]:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        razorpay_order_id = data['razorpay_order_id']
        razorpay_payment_id = data['razorpay_payment_id']
        razorpay_signature = data['razorpay_signature']

        # 1. Verify Razorpay signature using secret key
        is_valid = verify_payment_signature(razorpay_order_id, razorpay_payment_id, razorpay_signature)
        
        if not is_valid:
            # Mark order as failed in supabase
            update_order_status(razorpay_order_id, "failed", razorpay_payment_id)
            return jsonify({"error": "Payment verification failed", "verified": False}), 400

        # 4. If payment is verified successfully: Update order in Supabase
        order = update_order_status(razorpay_order_id, "success", razorpay_payment_id)
        
        if not order:
            # Fallback re-fetch order if update didn't return data
            order = get_order_by_razorpay_order_id(razorpay_order_id)
            
        if not order:
            return jsonify({"error": "Order not found in DB"}), 404

        product_id = order.get('product_id')
        user_email = order.get('email')
        user_name = order.get('name')

        # 5. Increase sales count
        if product_id:
            increment_sales_count(product_id)

        # 6. Fetch the product drive link
        product = get_product_by_id(product_id)
        if not product:
            return jsonify({"error": "Product details not found"}), 404

        drive_link = product.get('drive_link')
        product_name = product.get('product_name')

        # 7. Send email using Resend API
        email_response = send_download_email(
            to_email=user_email,
            name=user_name,
            drive_link=drive_link,
            product_name=product_name
        )

        return jsonify({
            "message": "Payment verified and email sent successfully",
            "verified": True
        }), 200

    except Exception as e:
        print(f"Error in /verify-payment: {e}")
        return jsonify({"error": "Internal server error"}), 500
