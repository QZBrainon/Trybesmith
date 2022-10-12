import { Router } from 'express';
import { insertProduct, getAllProducts } from '../controller/ProductController';

const router = Router();

router.get('/', getAllProducts);
router.post('/', insertProduct);

export default router;