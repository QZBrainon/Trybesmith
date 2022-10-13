import express from 'express';
import productsRouter from './routes/productsRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import loginRouter from './routes/loginRouter';
import loginValidator from './middlewares/loginValidator';
import httpErrorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginValidator, loginRouter);

app.use(httpErrorHandler);

export default app;
