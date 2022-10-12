import { Router } from 'express';
import getAllOrders from '../controller/OrderController';

const router = Router();

router.get('/', getAllOrders);

export default router; 