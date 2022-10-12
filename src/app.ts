import express from 'express';
import productsRouter from './routes/productsRouter';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

export default app;
