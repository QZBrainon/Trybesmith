import { Request, Response } from 'express';
import OrderService from '../service/OrderService';

const orderService = new OrderService();

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getAllOrders();
  return res.status(200).json(result);
};

export default getAllOrders;