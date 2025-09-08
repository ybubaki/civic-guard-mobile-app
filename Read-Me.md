# 🛡️ CIVIC Guard

**CIVIC Guard** is a civic engagement platform that bridges communication between citizens and public authorities. It enables citizens to report incidents, track responses, and receive important updates while allowing administrators to manage and resolve reports effectively.

This monorepo includes three main components:

- 🖥️ **Admin Dashboard** – Web app for administrators to manage reports and users
- 📱 **Mobile App (Frontend)** – React Native app for citizens
- 🌐 **Backend API** – Node.js API for handling data, authentication, and communication

---

## 📁 Project Structure

civic-guard\
├── admin/ # Admin dashboard (React)\
├── frontend/ # Mobile app (React Native + Expo)\
├── backend/ # REST API (Express + MongoDB)\
├── README.md

---

## ⚙️ Tech Stack

| Component    | Stack                                                  |
| ------------ | ------------------------------------------------------ |
| Admin        | React, Tailwind CSS, Axios, ShadcnUI, Leaflet          |
| Frontend App | React Native, Expo, React-Query, NativeWind, Expo Maps |
| Backend API  | Node.js, Express, SQlite, Drizzle-ORM, JWT, Argon2     |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- Expo CLI (for mobile app): `npm install -g expo-cli`

---

#### 1. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```bash
DATABASE_URL=file:./db.sqlite3

GEMINI_API_KEY=AI_SECRET
JWT_SECRET=secret

SMTP_USER = user@ethereal.email
SMTP_PASS = user@pass
```

Run the backend server:

```bash
npm run dev
```

#### 2. Mobile App (Frontend) Setup

```bash
cd ../frontend
npm install
expo start
```

Use Expo Go or an emulator to view the app. Make sure the backend is running and accessible from your device.

#### 3. Admin Dashboard Setup

```bash
cd ../admin
npm install
npm run dev
```
