import { Router } from 'express';
import insertProduct from '../controller/ProductController';

const router = Router();

router.post('/', insertProduct);

export default router;