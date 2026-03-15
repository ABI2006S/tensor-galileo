from flask import Flask, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Import routes
from routes.checkout import checkout_bp
from routes.payment_verify import payment_verify_bp
from routes.download import download_bp

app = Flask(__name__)
# Enable CORS for frontend, you may want to restrict the origins in production
CORS(app) 

# Register Blueprints
app.register_blueprint(checkout_bp)
app.register_blueprint(payment_verify_bp)
app.register_blueprint(download_bp)

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy", 
        "message": "Editing Assets Backend is running!"
    })

if __name__ == '__main__':
    # Get port from environment variables, or use default 5000
    port = int(os.environ.get('PORT', 5000))
    # Run server
    app.run(host='0.0.0.0', port=port, debug=True)
