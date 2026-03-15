import requests
import json
import time

BASE_URL = "http://localhost:5000"

print("1. Testing Health Check...")
try:
    res = requests.get(f"{BASE_URL}/")
    print(res.json())
except Exception as e:
    print(f"Health check failed: {e}")

print("\n2. Testing /create-order...")
# Using the product UUID we just generated
payload = {
    "name": "Test User",
    "email": "test@example.com",
    "dream": "Filmmaker",
    "state": "Kerala",
    "product_id": "5ba7f5f0-b8b0-48eb-876d-8d6ee0aadc99"
}
try:
    res = requests.post(f"{BASE_URL}/create-order", json=payload)
    print(f"Status: {res.status_code}")
    data = res.json()
    print(json.dumps(data, indent=2))
    order_id = data.get("order_id")
except Exception as e:
    print(f"Create order failed: {e}")
    order_id = None

if order_id:
    print("\n3. Testing /download (Should fail since not paid yet)...")
    # First get the DB order UUID (not Razorpay ID) to test /download properly
    # Wait, /download logic takes order_id (from DB). We need the DB order ID.
    # Our create-order returns razorpay_order_id, but the download route expects the Supabase primary key `id`.
    # Let's verify what /create-order is returning - currently it only returns razorpay order details.
    pass

print("\n4. Testing /verify-payment with invalid signature...")
if order_id:
    verify_payload = {
        "razorpay_order_id": order_id,
        "razorpay_payment_id": "pay_fake_id_123",
        "razorpay_signature": "invalid_signature_mock"
    }
    try:
        res = requests.post(f"{BASE_URL}/verify-payment", json=verify_payload)
        print(f"Status: {res.status_code}")
        print(json.dumps(res.json(), indent=2))
    except Exception as e:
        print(f"Verify payment failed: {e}")
