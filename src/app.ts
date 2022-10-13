import express from 'express';
import 'express-async-errors';
import productsRouter from './routes/productsRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import loginRouter from './routes/loginRouter';
import loginValidator from './middlewares/loginValidator';
import httpErrorHandler from './middlewares/errorHandler';
import productNameValidator from './middlewares/productNameValidator';
import productAmountValidator from './middlewares/productAmountValidator';

const app = express();

app.use(express.json());

app.use('/products', productNameValidator, productAmountValidator, productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginValidator, loginRouter);

app.use(httpErrorHandler);

export default app;
