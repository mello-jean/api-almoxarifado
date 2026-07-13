import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';

import { requireRole } from '../middlewares/auth-middleware.js';

const router = Router();

router.post('/products', requireRole('ADMIN'), productController.create);
router.get('/product', requireRole('ADMIN', 'READER'), productController.list);
router.get('/product/:id', ensureValidId, requireRole('ADMIN', 'READER'), productController.get);
// router.put('/users/:id', ensureValidId, userController.update);
// router.delete('/users/:id', ensureValidId, userController.remove);

export default router;
