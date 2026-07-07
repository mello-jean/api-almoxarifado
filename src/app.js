import express from 'express';
import logMiddleware from './middleware/logger.middleware.js';
import healtcheckRoutes from './routes/healthcheck.routes.js';


const app = express();

// configurações da api

app.use(logMiddleware);

// routes
app.use('/api', healtcheckRoutes);


export default app;
