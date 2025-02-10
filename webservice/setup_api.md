### 🚀 **Steps to Create a Flask API with Front-End using JavaScript**  

### **Step 1: Install Flask and CORS**
Open a terminal and install Flask and flask-cors:
```bash
pip install flask flask-cors
```
### **Step 2: Create Flask API (`app.py`)**
Create a file `app.py` and add the following code:

```python
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Sample user data
users = [
    {"id": 1, "name": "Rajesh Kumar", "email": "rajesh@example.com"},
    {"id": 2, "name": "Anita Sharma", "email": "anita@example.com"},
]

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

if __name__ == '__main__':
    app.run(debug=True, port=8000)  # Run on port 8000
```

### **Step 3: Create Front-End (`index.html`)**
Create a file `index.html` and add this code:

```html
<!DOCTYPE html>
<html>
<head>
    <title>User List</title>
</head>
<body>
    <h1>User Details</h1>
    <button onclick="getUsersConsole()">Get Users</button>
    <ul id="userList"></ul>

    <script>
        function getUsersConsole(){
            window.fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json()) // Convert response to JSON
                .then(data => console.log(data)) // Log the data
                .catch(error => console.error('Error:', error)); // Handle errors
        }
        function getUsers() {
            fetch('http://127.0.0.1:8000/api/users')
                .then(response => response.json())
                .then(data => {
                    const userList = document.getElementById('userList');
                    userList.innerHTML = ''; // Clear previous list
                    data.forEach(user => {
                        let li = document.createElement('li');
                        li.textContent = `${user.name} - ${user.email}`;
                        userList.appendChild(li);
                    });
                })
                .catch(error => alert('Error fetching users:', error));
        }
    </script>
</body>
</html>
```

### **Step 4: Run Flask API**
Run the Flask application by executing:
```bash
python app.py
```
✅ You should see Flask running at `http://127.0.0.1:8000`.


### **Step 5: Run `index.html` using VS Code Go Live Extension**
1. Open `http://127.0.0.1:5000/index.html` in a browser.
2. Click the "Get Users" button to fetch users.
