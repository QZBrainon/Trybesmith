import { Router } from 'express';
import register from '../controller/UserController';

const router = Router();

router.post('/', register);

export default router;