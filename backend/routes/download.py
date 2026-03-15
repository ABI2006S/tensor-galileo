from flask import Blueprint, jsonify
from supabase_service import get_order_by_id, get_product_by_id

download_bp = Blueprint('download', __name__)

@download_bp.route('/download/<order_id>', methods=['GET'])
def handle_download(order_id):
    try:
        # 1. Fetch the order
        order = get_order_by_id(order_id)
        
        if not order:
            return jsonify({"error": "Order not found."}), 404
            
        # 2. Check if payment is successful
        payment_status = order.get('payment_status')
        if payment_status != 'success':
            return jsonify({
                "error": "Payment is not complete.",
                "status": payment_status,
                "message": f"Please complete your payment before downloading. Current status: {payment_status}"
            }), 403
            
        # 3. Get product details for the download link
        product_id = order.get('product_id')
        product = get_product_by_id(product_id)
        
        if not product:
            return jsonify({"error": "Product associated with this order was not found."}), 404
            
        drive_link = product.get('drive_link')
        
        if not drive_link:
            return jsonify({"error": "Download link is missing for this product."}), 404
            
        # 4. Return the download link
        return jsonify({
            "success": True,
            "download_url": drive_link,
            "product_name": product.get('product_name')
        }), 200

    except Exception as e:
        print(f"Error in /download/<order_id>: {e}")
        return jsonify({"error": "Internal server error"}), 500
