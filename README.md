# 🧩 atom-task-app

A simple and elegant To-Do List web application built with Angular (frontend) and Express.js (backend). It features full CRUD functionality and user authentication powered by Firebase.

---

## 🚀 Overview

**atom-task-app** allows users to:
- Sign up and log in using Firebase Authentication
- Create, read, update, and delete their personal tasks
- Enjoy a responsive UI built with Angular
- Interact with a secure Express.js backend that communicates with Firebase

---

## 🧰 Tech Stack

**Frontend:**
- Angular
- TypeScript
- Firebase (Authentication)
- HTML / SCSS

**Backend:**
- Node.js
- Express.js
- Firebase Admin SDK

---

## ⚙️ Project Structure

```
atom-task-app/
├── backend/   # Express.js API
└── frontend/  # Angular web application
```

---

## 🛠️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/atom-task-app.git
cd atom-task-app
```

### 2️⃣ Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a `.env` file at the backend root and include:

```
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="your_private_key"
```

Install dependencies:

```bash
npm install
```

Run the server:

```bash
npm start
```

The API should now be running at http://localhost:5000

---

### 3️⃣ Frontend Setup

Navigate to the frontend folder:

```bash
cd ../frontend
```

Update the Firebase configuration in `src/environments/environment.ts` with your Firestore app values.

Install dependencies:

```bash
npm install
```

Run the Angular app:

```bash
npm start
```

The frontend should now be running at http://localhost:4200

---

## 📄 License

This project is licensed under the MIT License.
