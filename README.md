# 🧑‍💼 Employee Leave Management System

A full-featured Employee Leave Management System built using Angular.
This application allows employees to request leave and enables admins to manage and track requests efficiently.

---

## 🚀 Live Demo

*(Add your deployed link here later — Netlify / Vercel / Firebase)*

---

## 📸 Screenshots

### 🔐 Admin Login

<img width="1440" height="900" alt="Screenshot 2026-04-27 at 1 55 15 AM" src="https://github.com/user-attachments/assets/0ab29043-d934-40de-b421-8044c564fc16" />



### 📊 Dashboard

<img width="1440" height="900" alt="Screenshot 2026-04-27 at 1 55 22 AM" src="https://github.com/user-attachments/assets/3c019ec7-bac7-4fc7-ab7d-ec10aeb3518c" />


### 📋 Leave Management

<img width="1440" height="900" alt="Screenshot 2026-04-27 at 1 54 59 AM" src="https://github.com/user-attachments/assets/63a2e346-f94f-41c1-8f58-5d7853182cc5" />


---

## ✨ Features

* 📝 Apply for leave (Employee side)
* ✅ Approve / ❌ Reject leave (Admin side)
* 📊 Dashboard with leave status tracking
* 🔄 Real-time UI updates using Angular
* 🧾 Form validation using Reactive Forms
* 📦 REST API integration (JSON Server)

---

## 🛠️ Tech Stack

* **Frontend:** Angular (Latest)
* **Language:** TypeScript
* **Styling:** HTML, CSS
* **API:** JSON Server (Mock Backend)
* **State/data Handling:** Angular Services + HttpClient

---

## 📂 Project Structure

```bash
src/
 ├── app/
 │   ├── components/
 │   │   ├── admin/
 │   │   ├── dashboard/
 │   │   ├── admin-login/
 │   │   └── login/
 │   ├── services/
 │   ├── models/
 │   └── app.config.ts
```

---

## ⚙️ Installation & Setup

```bash
git clone https://github.com/anupmishra2040/Employee-Leave-Management.git
cd Employee-Leave-Management
npm install
ng serve
```

Open:

```
http://localhost:4200
```

---

## 🔌 Backend Setup (JSON Server)

```bash
npm install -g json-server
```

Create `db.json`:

```json
{
  "employees": []
}
```

Run server:

```bash
json-server --watch db.json --port 3000
```

---

## 📊 How It Works

* Employee submits leave request
* Data is stored in JSON server
* Admin views all requests
* Admin updates status (Approved / Rejected)
* Dashboard reflects updated data

---

## 🧠 Key Learning

* Angular Component Architecture
* Reactive Forms & Validation
* API Integration using HttpClient
* Observables & Async Data Handling
* Component Communication

---

## 🚀 Future Enhancements

* 🔐 JWT Authentication with Interceptors
* 👥 Role-based access control
* ☁️ Real database (MongoDB / Firebase)
* 📧 Email notification system
* 📱 Responsive UI

---

## 🏆 Why This Project Matters

This project demonstrates:

* Real-world CRUD operations
* Frontend + API integration
* Admin/User workflow logic
* Production-like structure


