# NarrisiaAI - Executive AI Productivity Platform

An advanced AI-powered productivity and professional networking platform that leverages multi-agent interactions to enhance executive professional development through intelligent, interactive experiences.

![NarrisiaAI Dashboard](https://img.shields.io/badge/Status-Active-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248)
![React](https://img.shields.io/badge/Frontend-React-61DAFB)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933)

## Features

- **🤖 AI-Powered Dashboard** - Intelligent communication tracking and analytics
- **📧 Email Management** - Advanced email company research and classification
- **🎯 Credibility Assessment** - Multi-metric trust and reliability scoring
- **👤 Executive Profiles** - Comprehensive user management system
- **🔐 Secure Authentication** - Local and OAuth integration (Google)
- **📊 Real-time Analytics** - Live communication metrics and insights
- **🌐 Modern UI/UX** - Responsive design with dark theme
- **🔄 Live Updates** - Real-time greetings based on Indian timezone

## Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** for styling
- **Shadcn/ui** component library
- **TanStack Query** for state management
- **Wouter** for routing

### Backend  
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **Passport.js** for authentication
- **JWT** for token management
- **Stripe** for payment processing

### Development
- **TypeScript** for type safety
- **ESLint** for code quality
- **Hot reload** with HMR support

## Quick Start

### Prerequisites
- Node.js (v20 or higher)
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/narrisia/Narrisia-beta.git
   cd narrisia
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/narrisia
   JWT_SECRET=your_jwt_secret_here
   SESSION_SECRET=your_session_secret_here
   ```

4. **Start MongoDB:**
   ```bash
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

5. **Run the application:**
   ```bash
   npm run dev
   ```

6. **Access the application:**
   Open `http://localhost:5000` in your browser

## Project Structure

```
narrisia/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configurations
├── server/                 # Backend Express application
│   ├── auth.ts            # Authentication logic
│   ├── database.ts        # MongoDB connection and models
│   ├── routes.ts          # API route handlers
│   └── index.ts           # Server entry point
├── shared/                 # Shared types and schemas
└── attached_assets/        # Static assets and images
```

## Key Features

### Dashboard
- **Communication Metrics**: Total Mail (247 this week), Open Communication (23 active threads)
- **Meeting Management**: Schedule tracking (8 this month), Call logging (15 this week)
- **Indian Timezone**: Live greetings that update based on IST
- **Credibility Meter**: Multi-factor business trust assessment

### Authentication
- **Local Authentication**: Email/password with secure bcrypt hashing
- **Google OAuth**: Seamless social login integration
- **Session Management**: Secure session handling with persistence

### Profile System  
- **Executive Profiles**: Role-based user management
- **Company Information**: Business details and industry classification
- **Setup Progress**: Onboarding tracking and completion status

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/google` - Google OAuth initiation
- `GET /api/auth/google/callback` - Google OAuth callback

### User Management
- `GET /api/user` - Get current user
- `PUT /api/user` - Update user profile

## Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `MONGODB_URI` | MongoDB connection string | Yes | - |
| `JWT_SECRET` | JWT signing secret | Yes | - |
| `SESSION_SECRET` | Session encryption secret | Yes | - |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | No | - |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | No | - |
| `PORT` | Server port | No | 5000 |

## Development

### Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

### Database Migration
```bash
npm run db:push  # Push schema changes to database
```

## Deployment

### Production Build
```bash
npm run build
npm start
```

### Environment Setup
- Set `NODE_ENV=production`
- Use production MongoDB instance
- Configure proper session store
- Set secure JWT secrets

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## Security

- All passwords are hashed using bcrypt
- JWT tokens for secure API access
- Session-based authentication with secure cookies
- Environment variables for sensitive configuration
- MongoDB connection with authentication

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact: support@narrisia.ai

## Changelog

- **August 16, 2025**: Added Indian timezone support, updated dashboard metrics, improved profile highlighting
- **June 16, 2025**: Added OAuth integration and comprehensive environment configuration
- **June 15, 2025**: Initial project setup with React/Node.js architecture

---

Built with ❤️ using modern web technologies for executive productivity enhancement.# Narrisia-beta
