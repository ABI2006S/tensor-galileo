import os
import sys

# Change to the backend directory where the .env file is located
current_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_dir)

from supabase_service import supabase

if supabase is None:
    print("Supabase connection failed. Check your .env file.")
    sys.exit(1)

def insert_product():
    product_data = {
        "product_name": "Complete Creator Bundle",
        "price": 0,
        "drive_link": "https://drive.google.com/drive/folders/1OrWz7cRJ2OnRt-KXbzOLWnPPzTx11nyz",
        "description": "Complete Creator Bundle"
    }

    print("Inserting product...")
    try:
        response = supabase.table("products").insert(product_data).execute()
        if response.data:
            print("Product inserted successfully!")
            print(f"Product Data: {response.data[0]}")
            print("\nIMPORTANT: Note the 'id' (UUID) above. You'll need it for your frontend checkout form's 'product_id'.")
        else:
            print("Failed to insert product.")
    except Exception as e:
        print(f"Error inserting product: {e}")

if __name__ == "__main__":
    insert_product()
