import os
import sys

# Ensure we're in the backend directory
current_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_dir)
sys.path.append(current_dir)

from email_service import send_download_email

def test_email():
    # Replace with the email address you used to sign up for Resend
    # Since onboarding@resend.dev can only send to yourself
    target_email = "lumefxpresets@gmail.com" 
    
    print(f"Testing Resend email service...")
    print(f"Sending to: {target_email}")
    print(f"Using API Key: {os.environ.get('RESEND_API_KEY')[:10]}...")
    
    response = send_download_email(
        to_email=target_email,
        name="Test User",
        drive_link="https://drive.google.com/test",
        product_name="Test Product"
    )
    
    if response:
        print("Success! Email Response ID:", response.get("id"))
    else:
        print("Failed to send email. Check console output above for errors.")

if __name__ == "__main__":
    test_email()
