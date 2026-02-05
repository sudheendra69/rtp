# 🍽️ Online Food Ordering Website (Multi-Restaurant System)

An advanced **Online Food Ordering Website** that allows users to order food from **multiple restaurants in a single order** and receive it through **one delivery partner**.  
This project improves convenience, reduces delivery cost, and enhances user experience compared to traditional food delivery platforms.

## 🚀 Features

- 👤 User Authentication (Login & Registration)
- 🍕 Browse menus from multiple restaurants
- 🛒 Add items from different restaurants into **one common cart**
- ➕ Dynamic cart management (add/remove/update quantity)
- 💳 Single checkout for multi-restaurant orders
- 🚚 Single delivery partner assignment (simulated logic)
- 📱 Fully responsive UI (desktop & mobile)
- 🗄️ MongoDB-based data storage (users, orders, cart)


## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- Bootstrap 4
- JavaScript
- jQuery

### Backend
- Node.js
- Express.js

### Database
- MongoDB


## 🧠 System Architecture

- User interacts with the frontend UI
- Backend handles authentication, cart, and order logic
- MongoDB stores:
  - User details
  - Food items
  - Cart data
  - Orders
- System assigns **one delivery partner** for multi-restaurant orders


## 📂 Project Structure

/project-root
│
├── /public
│ ├── css
│ ├── js
│ └── images
│
├── /views
│ └── index.html
│
├── /routes
│ └── api routes
│
├── server.js
├── package.json
└── README.md

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/sudheendra69/rtp.git
2️⃣ Navigate to project directory
cd your-repo-name
3️⃣ Install dependencies
npm install
4️⃣ Run the server
npm start

Server will start on:
http://localhost:3000

🧪 How It Works
User registers or logs in
Browses food items from multiple restaurants
Adds items into a single cart
Enters delivery details
Places order with one checkout
Backend assigns a single delivery partner
Order confirmation is displayed
