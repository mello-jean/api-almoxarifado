import { Router } from 'express';
import reportController from '../controllers/report.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { requireRole } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/reports/balances', requireRole('ADMIN', 'READER'),reportController.getAllBalances);
// router.get('/reports/balances/:id', ensureValidId, reportController.getProductBalances);
router.get('/reports/history/:id', ensureValidId, reportController.getProductHistory);

export default router;
