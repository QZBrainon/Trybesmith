import { Router } from 'express';
import getAllOrders, { postOrder } from '../controller/OrderController';
import jwtAuth from '../middlewares/jwtAuth';

const router = Router();

router.get('/', getAllOrders);
router.post('/', jwtAuth, postOrder);

export default router; 