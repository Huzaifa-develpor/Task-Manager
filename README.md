# Task Manager

A secure full-stack task management application that allows users to organize and manage their tasks efficiently. The application includes authentication, protected routes, and user-specific task management to ensure data privacy and security.

## Features

* User Registration
* User Login Authentication
* JWT-Based Authorization
* Protected Routes
* Add Tasks
* View Tasks
* Delete Tasks
* User-Specific Task Management
* Secure Backend API

## Tech Stack

### Frontend

* React.js
* Tailwind

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JSON Web Token (JWT)
* Bcrypt

## Installation

### Clone Repository

```bash
git clone https://github.com/Huzaifa-develpor/Task-Manager.git
```

### Install Dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### Start Application

```bash
npm start
```

## Security Features

* Password Hashing using Bcrypt
* JWT Authentication
* Protected API Routes
* User-Based Data Access Control

## Future Improvements

* Edit Tasks
* Task Status Management
* Task Categories
* Search and Filter Functionality
* User Profile Management

## Author

Huzaifa Anwar
