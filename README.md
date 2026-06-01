# Task Manager App

## 📌 Overview

This is a full-stack Task Manager application with authentication and protected routes. Users can securely sign up, log in, and manage their personal tasks. Each user can only access their own data, ensuring privacy and security.

---

## 🚀 Features

* User Signup & Login (Authentication)
* JWT-based secure login system
* Protected routes (No access without login)
* Add new tasks
* View all tasks
* Delete tasks
* User-specific task management
* Secure API endpoints

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT (JSON Web Token)
* Styling: CSS / Tailwind (if used)

---

## 🔐 Authentication Flow

* User registers an account
* Logs in using credentials
* Receives a JWT token
* Token is used to access protected routes
* Without login, no task operations are allowed

---

## 📂 Project Structure

```
client/   → Frontend (React)
server/   → Backend (Node + Express)
models/   → Database schemas
routes/   → API routes
middleware/ → Auth middleware
```

---

## ▶️ Installation & Setup

### 1. Clone repository

```
git clone https://github.com/your-username/task-manager.git
```

### 2. Install dependencies

Backend:

```
cd server
npm install
```

Frontend:

```
cd client
npm install
```

### 3. Setup environment variables

Create `.env` file in backend:

```
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000
```

### 4. Run project

Backend:

```
npm start
```

Frontend:

```
npm start
```

---

## 🔒 Protected Routes

* All task-related routes require authentication
* Middleware verifies JWT token before allowing access

---

## 📸 Future Improvements

* Update/Edit tasks feature
* Task completion status
* UI improvements
* Dashboard analytics

---

## 👨‍💻 Author

Huzaifa Anwar

