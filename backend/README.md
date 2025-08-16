# Backend - NarrisiaAI

Node.js backend API server for NarrisiaAI platform running on port 3001.

## Structure

```
backend/
├── server.ts              # Main Node.js server
├── .env                   # Environment variables
├── .env.example           # Environment template
├── config/
│   └── database.ts        # MongoDB connection
├── middleware/
│   └── auth.ts           # Authentication
└── routes/
    └── index.ts          # API endpoints
```

## Running the Backend

```bash
cd backend
npx tsx server.ts
```

## Environment Setup

Create `.env` file with your values:

**Required variables:**
- `MONGODB_URI` - Database connection
- `JWT_SECRET` - Token signing  
- `SESSION_SECRET` - Session encryption
- `GOOGLE_CLIENT_ID` - OAuth integration
- `PORT` - Server port (3001)

## API Endpoints

- `GET /health` - Health check
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/google` - Google OAuth
- `GET /api/user` - Get user profile
- `PUT /api/user` - Update user profile

## Features

- MongoDB with in-memory fallback
- Google OAuth authentication
- Session management
- CORS enabled for frontend
- IST timezone support