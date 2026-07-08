import express from 'express';

// middlewares
import { authMiddleware } from './middlewares/auth-middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';
import logMiddleware from './middlewares/logger.middleware.js';

// routes
import healtcheckRoutes from './routes/healthcheck.routes.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';

const app = express();

// configurações da api
app.use(express.json());
app.use(logMiddleware);

// routes
app.use('/api', healtcheckRoutes);

app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.use('/api', authMiddleware, productRoutes);


// tratamento de erro
app.use(errorMiddleware);

export default app;
