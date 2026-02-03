import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import type { Request, Response } from 'express';
import { corsMiddleware } from './lib/config/cors.js';
import { requestLogger } from './lib/config/request-Logger.js';

const app = express();
const PORT = process.env.PORT;

// Use middleware
app.use(corsMiddleware);
app.use(compression());
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(requestLogger);

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Default endpoint
app.get('/api', (req: Request, res: Response) => {
  res.send('Backend is running');
});

//Routes

// Start server -
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
