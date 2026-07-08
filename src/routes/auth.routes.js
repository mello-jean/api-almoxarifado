import { Router } from 'express';
import authController from '../controllers/auth.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';
import { authMiddleware } from '../middlewares/auth-middleware.js';

const router = Router();

router.post('/auth/login', authController.login);

router.post('/auth/validate', authMiddleware, (req, res) => { return res.json({ msg: "OK" }) });

export default router;
