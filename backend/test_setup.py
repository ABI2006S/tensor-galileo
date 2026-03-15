import os
import sys

# Append backend directory to path
current_dir = os.path.dirname(os.path.abspath(__file__))
sys.path.append(current_dir)

print("Testing imports...")
try:
    from app import app
    import razorpay_service
    import supabase_service
    import email_service
    print("All imports successful!")
except Exception as e:
    print(f"Import failed: {e}")

print("\nTesting Supabase...")
try:
    if supabase_service.supabase:
        print("Supabase client initialized.")
    else:
        print("Supabase client is None.")
except Exception as e:
    print(f"Supabase error: {e}")

print("\nTesting Razorpay...")
try:
    if razorpay_service.client:
        print("Razorpay client initialized.")
    else:
        print("Razorpay client is None.")
except Exception as e:
    print(f"Razorpay error: {e}")

print("\nTesting Resend...")
try:
    if email_service.API_KEY:
        print("Resend API key found.")
    else:
        print("Resend API key missing.")
except Exception as e:
    print(f"Resend error: {e}")
