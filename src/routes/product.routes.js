import { Router } from 'express';
import productController from '../controllers/product.controller.js';
import { ensureValidId } from '../middlewares/validate.middleware.js';

const router = Router();

router.post('/products', productController.create);
router.get('/product', productController.list);
router.get('/product/:id', ensureValidId, productController.get);
// router.put('/users/:id', ensureValidId, userController.update);
// router.delete('/users/:id', ensureValidId, userController.remove);

export default router;
