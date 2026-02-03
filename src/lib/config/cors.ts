import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

// Define allowed origins for CORS
const allowedOrigins = [process.env.FRONTEND_URL];

// CORS options configuration
export const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    if (!origin || allowedOrigins.includes(origin)) {
      // Allow the origin
      callback(null, true);
    } else {
      // Block the origin
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
};

// Export CORS middleware function
export const corsMiddleware = cors(corsOptions);
