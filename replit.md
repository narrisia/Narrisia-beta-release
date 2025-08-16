# NarrisiaAI - Replit Configuration

## Overview

NarrisiaAI is a comprehensive AI-powered productivity platform designed for executives and teams. The application provides intelligent automation through specialized AI agents that handle tasks like email management, call analysis, scheduling, and reporting. The platform features a modern React frontend with a Node.js/Express backend, supporting both local authentication and OAuth integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Structure**: Organized backend folder with proper separation of concerns
- **Configuration**: Dedicated config folder for database and storage
- **Middleware**: Custom authentication middleware with Passport.js
- **Routes**: RESTful API endpoints with comprehensive error handling
- **Session Management**: Express sessions with MongoDB fallback support
- **Development**: TSX for TypeScript execution with hot reload

### Data Storage Strategy
The application uses:
- **Database**: MongoDB with Mongoose ODM for user data and application state
- **Connection**: MongoDB Atlas with fallback to in-memory storage for development

## Key Components

### Authentication System
- **Local Authentication**: Email/password with bcrypt hashing
- **OAuth Integration**: Google OAuth 2.0 with Passport.js
- **Session Management**: Express sessions with secure cookie configuration
- **JWT Support**: Token-based authentication for API access

### AI Agent Framework
The platform is built around specialized AI agents:
- **Call Analyzer Agent**: Meeting transcription and analysis
- **Email Management Agent**: Automated email processing and categorization
- **Research Agent**: Company and contact research capabilities
- **Reporting Agent**: Analytics and insights generation
- **Scheduling Agent**: Calendar management and coordination

### Payment Integration
- **Stripe Integration**: Complete payment processing with multiple pricing tiers
- **Subscription Management**: Flexible plans from free to enterprise
- **Checkout Flow**: Integrated payment forms with React Stripe.js

### User Management
- **Profile System**: Comprehensive user profiles with company information
- **Role-based Access**: Executive-level user roles and permissions
- **Settings Management**: Customizable user preferences and notifications

## Data Flow

### Authentication Flow
1. User registration/login through frontend forms
2. Credentials validated by Passport.js strategies
3. Session established with secure cookies
4. Frontend receives user data via protected API endpoints
5. TanStack Query manages authentication state globally

### Agent Interaction Flow
1. User initiates agent tasks through dashboard
2. Frontend sends requests to Express API endpoints
3. Backend processes requests through agent-specific handlers
4. Results stored in database and returned to frontend
5. Real-time updates via polling or webhooks

### Payment Processing Flow
1. User selects pricing plan from frontend
2. Stripe checkout session created via backend API
3. Payment processed through Stripe hosted checkout
4. Webhook confirms payment and updates user subscription
5. Access levels updated based on subscription tier

## External Dependencies

### Core Dependencies
- **mongoose**: MongoDB object modeling
- **passport**: Authentication middleware
- **stripe**: Payment processing
- **@sendgrid/mail**: Email service integration
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token management

### Frontend Dependencies
- **@tanstack/react-query**: Server state management
- **@hookform/resolvers**: Form validation integration
- **@radix-ui/***: Accessible UI components
- **@stripe/react-stripe-js**: Payment form components
- **wouter**: Lightweight routing
- **zod**: Runtime type validation

### Development Dependencies
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundling
- **tailwindcss**: Utility-first CSS framework

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with Replit configuration
- **Database**: MongoDB with in-memory fallback for development
- **Hot Reload**: Vite HMR for frontend, TSX for backend
- **Port Configuration**: Frontend serves on port 5000, proxied to port 80

### Production Build
- **Frontend**: Vite build outputting to `dist/public`
- **Backend**: ESBuild bundle targeting Node.js ESM format
- **Assets**: Static file serving from build directory
- **Environment**: Production-optimized with proper error handling

### Scaling Considerations
- **Database**: MongoDB Atlas for automatic scaling
- **Sessions**: Express sessions with MongoDB store
- **Static Assets**: CDN-ready build output
- **Environment Variables**: Comprehensive configuration management

## Changelog

Changelog:
- June 15, 2025. Initial setup
- June 16, 2025. Added comprehensive .env file with database, authentication, OAuth, API keys, and application configuration
- June 16, 2025. Added complete social media links to footer: Twitter, Instagram, and LinkedIn (all open in new tabs)
- August 16, 2025. Updated to use Indian timezone for live greetings, switched dashboard metrics to communication-focused tracking (Total Mail, Open Communication, Meeting Schedule, Call Taken), improved profile highlighting, and configured MongoDB with fallback to in-memory storage for development
- August 16, 2025. Reorganized backend architecture into dedicated backend folder with proper structure: config/, routes/, middleware/, controllers/, models/, utils/ for better code organization and maintainability
- August 16, 2025. Configured backend to run natively on Node.js with dedicated port 3001, standalone execution, and complete API functionality independent of the main server workflow
- August 16, 2025. Completed comprehensive project cleanup: removed all unnecessary files (start-backend.js, generated-icon.png, .env.example files, outdated documentation), streamlined project structure to essential files only
- August 16, 2025. Removed PostgreSQL/Drizzle configuration and dependencies, simplified to MongoDB-only architecture
- August 16, 2025. Prepared project for GitHub repository deployment at https://github.com/narrisia/Narrisia-beta.git
- August 16, 2025. Renamed project directory to "narrisia" for consistency with repository naming

## User Preferences

Preferred communication style: Simple, everyday language.