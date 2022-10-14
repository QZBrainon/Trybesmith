import { Router } from 'express';
import { insertProduct, getAllProducts } from '../controller/ProductController';
import productNameValidator from '../middlewares/productNameValidator'; 
import productAmountValidator from '../middlewares/productAmountValidator';

const router = Router();

router.get('/', getAllProducts);
router.post('/', productNameValidator, productAmountValidator, insertProduct);

export default router;