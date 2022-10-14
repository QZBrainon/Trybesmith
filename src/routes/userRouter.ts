import { Router } from 'express';
import { register } from '../controller/UserController';
import usernameValidator from '../middlewares/usernameValidator';
import classeValidator from '../middlewares/classeValidator';
import levelValidator from '../middlewares/levelValidator';
import passwordValidator from '../middlewares/passwordValidator';

const router = Router();

router.post('/', usernameValidator, classeValidator, levelValidator, passwordValidator, register);

export default router;