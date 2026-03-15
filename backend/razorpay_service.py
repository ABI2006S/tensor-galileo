import razorpay
import os
from dotenv import load_dotenv

load_dotenv()

KEY_ID = os.environ.get("RAZORPAY_KEY_ID")
KEY_SECRET = os.environ.get("RAZORPAY_SECRET")

if not KEY_ID or not KEY_SECRET:
    print("Warning: Missing RAZORPAY_KEY_ID or RAZORPAY_SECRET environment variables")

try:
    if KEY_ID and KEY_SECRET:
        client = razorpay.Client(auth=(KEY_ID, KEY_SECRET))
    else:
        client = None
except Exception as e:
    print(f"Failed to initialize Razorpay client: {e}")
    client = None

def create_razorpay_order(amount, currency="INR", receipt=None):
    """
    Amount should be in paise. 
    E.g., for 199 INR, amount should be 19900.
    """
    if client is None:
        raise Exception("Razorpay client not initialized.")
        
    data = {
        "amount": amount,
        "currency": currency,
        "receipt": receipt
    }
    
    order = client.order.create(data=data)
    return order

def verify_payment_signature(razorpay_order_id, razorpay_payment_id, razorpay_signature):
    if client is None:
        raise Exception("Razorpay client not initialized.")
        
    params_dict = {
        'razorpay_order_id': razorpay_order_id,
        'razorpay_payment_id': razorpay_payment_id,
        'razorpay_signature': razorpay_signature
    }
    try:
        # returns True if verification succeeds, throws SignatureVerificationError otherwise
        client.utility.verify_payment_signature(params_dict)
        return True
    except razorpay.errors.SignatureVerificationError:
        return False
    except Exception as e:
        print(f"Error verifying signature: {e}")
        return False
