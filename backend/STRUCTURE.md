# Backend Structure

## Current Files

```
backend/
├── server.ts              # Main server (port 3001)
├── .env                   # Environment config
├── config/
│   └── database.ts        # MongoDB connection
├── middleware/
│   └── auth.ts           # Passport.js auth
└── routes/
    └── index.ts          # API routes
```

## Core Components

**server.ts** - Express server with CORS, sessions, health check
**config/database.ts** - MongoDB connection with fallback to in-memory
**routes/index.ts** - Authentication, user management, payment APIs
**middleware/auth.ts** - Google OAuth and local authentication

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/narrisia_db
JWT_SECRET=your_jwt_secret
SESSION_SECRET=your_session_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
PORT=3001
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5000
```

## Running

```bash
cd backend
npx tsx server.ts
```

Backend runs independently on port 3001 with MongoDB database and authentication.