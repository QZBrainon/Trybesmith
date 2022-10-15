import { Request, Response } from 'express';
import OrderService from '../service/OrderService';

const orderService = new OrderService();

const getAllOrders = async (_req: Request, res: Response) => {
  const result = await orderService.getAllOrders();
  return res.status(200).json(result);
};

export const postOrder = async (req: Request, res: Response) => {
  const { userId } = res.locals;
  const { productsIds } = req.body;
  if (!productsIds) return res.status(400).json({ message: '"productsIds" is required' });
  if (!Array.isArray(productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  await orderService.postOrder(userId, productsIds);
  return res.status(201).json({ userId, productsIds });
};

export default getAllOrders;