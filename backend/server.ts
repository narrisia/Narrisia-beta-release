import express, { type Request, Response, NextFunction } from "express";
import session from "express-session";
import cors from "cors";
import { registerRoutes } from "./routes/index";

const app = express();
const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT || '3001', 10);

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.ALLOWED_ORIGINS?.split(',') || ['https://your-domain.com']
    : ['http://localhost:3000', 'http://localhost:5000'],
  credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Session configuration
app.use(session({
  secret: process.env.SESSION_SECRET || 'fallback-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const timestamp = new Date().toLocaleTimeString('en-US', { 
    timeZone: 'Asia/Kolkata',
    hour12: false 
  });
  console.log(`${timestamp} [backend] ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    timezone: 'Asia/Kolkata',
    uptime: process.uptime()
  });
});

// Register API routes
async function startServer() {
  try {
    await registerRoutes(app);
    
    // Error handling middleware
    app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      console.error('Backend error:', err);
      res.status(500).json({ 
        message: 'Internal server error',
        error: process.env.NODE_ENV === 'development' ? err.message : undefined
      });
    });

    // 404 handler
    app.use('*', (req: Request, res: Response) => {
      res.status(404).json({ message: 'Route not found' });
    });

    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Backend server running on port ${PORT}`);
      console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🕐 Timezone: Asia/Kolkata (IST)`);
      console.log(`💾 Database: MongoDB with in-memory fallback`);
      console.log(`🔒 Session: ${process.env.SESSION_SECRET ? 'Configured' : 'Using fallback'}`);
    });
  } catch (error) {
    console.error('Failed to start backend server:', error);
    process.exit(1);
  }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});

startServer().catch(console.error);