# Traiger Backend

Backend API for the Traiger Workout & Lifestyle Platform.

Traiger is a fitness ecosystem that supports:

- 📱 Mobile App (React Native)
- 🌐 Website (Next.js)
- 💻 Desktop Application (Electron)
- 🛠️ Admin Portal
- 🤖 AI Fitness Coach

This backend is built using **NestJS**, **PostgreSQL**, and **Prisma ORM**.

---

# Tech Stack

- NestJS
- Node.js
- TypeScript
- PostgreSQL
- Prisma ORM
- JWT Authentication
- Redis (Future)
- Docker
- Azure Blob Storage (Future)

---

# Project Structure

```
backend
│
├── src
│   ├── auth
│   ├── users
│   ├── workouts
│   ├── nutrition
│   ├── progress
│   ├── notifications
│   ├── ai
│   ├── common
│   ├── config
│   ├── prisma
│   ├── app.module.ts
│   └── main.ts
│
├── prisma
│   └── schema.prisma
│
├── test
│
├── .env
├── package.json
└── README.md
```

---

# Requirements

- Node.js 22+
- PostgreSQL 17+
- npm
- Git

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to backend

```bash
cd backend
```

Install dependencies

```bash
npm install
```

---

# Environment Variables

Create a `.env` file.

Example:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/traiger"

JWT_SECRET=your-secret-key

PORT=3000
```

---

# Prisma

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

# Run Project

Development

```bash
npm run start:dev
```

Production

```bash
npm run build

npm run start:prod
```

---

# API Base URL

```
http://localhost:3000
```

---

# Features

- User Authentication
- JWT Login
- Workout Management
- Exercise Library
- Nutrition Plans
- Progress Tracking
- AI Coach
- Push Notifications
- Payments
- Admin APIs

---

# Future Features

- Apple Health Integration
- Google Fit Integration
- Wearable Devices
- AI Meal Recognition
- Subscription Billing
- Community Challenges
- Live Workout Sessions

---

# Scripts

Install packages

```bash
npm install
```

Run development server

```bash
npm run start:dev
```

Build

```bash
npm run build
```

Lint

```bash
npm run lint
```

Test

```bash
npm run test
```

---

# Architecture

```
React Native
        │
Next.js Website
        │
Electron Desktop
        │
Admin Portal
        │
      REST API
        │
NestJS Backend
        │
Prisma ORM
        │
PostgreSQL
```

---

# License

MIT License

---

# Author

**Traiger Development Team**

Built with ❤️ using NestJS, PostgreSQL, and TypeScript.