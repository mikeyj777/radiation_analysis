from flask import Flask, jsonify
from flask_cors import CORS

from controllers.pypws_controller import radiation_analysis

import logging

logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# cors
app = Flask(__name__)
CORS(app, resources={
    r"/*": {  # This specifically matches your API routes
        "origins": ["http://localhost:3000", "http://WSSAFER02"],
        "methods": ["GET", "POST", "OPTIONS"],  # Explicitly allow methods
        "allow_headers": ["Content-Type"]  # Allow common headers
    }
})

# endpoint - need radiation analysis
@app.route('/api/radiation_analysis', methods=['POST'])
def rad_route():
    return radiation_analysis()

if __name__ == '__main__':
    app.run(debug=True)