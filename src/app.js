import express from 'express';
// import logMiddleware from './middleware/logger.middleware.js';
import healtcheckRoutes from './routes/healthcheck.routes.js';


const app = express();

// configurações da api
app.use(healtcheckRoutes);


export default app;
