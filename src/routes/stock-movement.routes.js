import { Router } from 'express';
import stockMovementController from '../controllers/stock-movement.controller.js';

const router = Router();

router.post('/stock-movements', stockMovementController.create);
router.get('/stock-movements', stockMovementController.list);

export default router;
