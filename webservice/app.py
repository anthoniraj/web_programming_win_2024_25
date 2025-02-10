from flask import Flask, jsonify
from flask_cors import CORS  # Import Cross-Origin Resource Sharing 

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample user data
users = [
    {"id": 1, "name": "Rajesh Kumar", "email": "rajesh@example.com"},
    {"id": 2, "name": "Anita Sharma", "email": "anita@example.com"},
    {"id": 3, "name": "Balamurugan",  "email": "bala@example.com"}
]

# API URL http://127.0.0.1:8000/api/users
@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True, port=8000)