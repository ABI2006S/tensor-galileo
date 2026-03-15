import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

REST_URL: str = os.environ.get("SUPABASE_URL", "")
SERVICE_KEY: str = os.environ.get("SUPABASE_SERVICE_KEY", "")

if not REST_URL or not SERVICE_KEY:
    print("Warning: Missing SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables")

try:
    if REST_URL and SERVICE_KEY:
        supabase: Client = create_client(REST_URL, SERVICE_KEY)
    else:
        supabase = None
except Exception as e:
    import traceback
    traceback.print_exc()
    print(f"Failed to initialize Supabase client: {e}")
    supabase = None

def get_product_by_id(product_id):
    if not supabase: return None
    try:
        response = supabase.table("products").select("*").eq("id", product_id).execute()
        if response.data and len(response.data) > 0:
            return response.data[0]
        return None
    except Exception as e:
        print(f"Error fetching product: {e}")
        return None

def create_order(name, email, dream, state, product_id, product_price, razorpay_order_id):
    if not supabase: return None
    try:
        data = {
            "name": name,
            "email": email,
            "dream": dream,
            "state": state,
            "product_id": product_id,
            "product_price": product_price,
            "razorpay_order_id": razorpay_order_id,
            "payment_status": "pending"
        }
        response = supabase.table("orders").insert(data).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error creating order: {e}")
        return None

def update_order_status(razorpay_order_id, status, razorpay_payment_id=None):
    if not supabase: return None
    try:
        data = {
            "payment_status": status
        }
        if razorpay_payment_id:
            data["razorpay_payment_id"] = razorpay_payment_id
            
        response = supabase.table("orders").update(data).eq("razorpay_order_id", razorpay_order_id).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error updating order status: {e}")
        return None

def increment_sales_count(product_id):
    if not supabase: return None
    try:
        # 1. Fetch current sales_count
        product = get_product_by_id(product_id)
        if not product: return None
        current_count = product.get('sales_count', 0)
        
        # 2. Update with incremented count
        response = supabase.table("products").update({"sales_count": current_count + 1}).eq("id", product_id).execute()
        return response.data[0] if response.data else None
    except Exception as e:
        print(f"Error incrementing sales count: {e}")
        return None

def get_order_by_razorpay_order_id(razorpay_order_id):
    if not supabase: return None
    try:
        response = supabase.table("orders").select("*").eq("razorpay_order_id", razorpay_order_id).execute()
        if response.data and len(response.data) > 0:
            return response.data[0]
        return None
    except Exception as e:
        print(f"Error fetching order: {e}")
        return None

def get_order_by_id(order_id):
    if not supabase: return None
    try:
        response = supabase.table("orders").select("*").eq("id", order_id).execute()
        if response.data and len(response.data) > 0:
            return response.data[0]
        return None
    except Exception as e:
        print(f"Error fetching order by ID: {e}")
        return None
