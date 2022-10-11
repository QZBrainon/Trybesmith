import { Request, Response } from 'express';
import ProductService from '../service/ProductService';

const productService = new ProductService();

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productService.insertProduct(product);
  return res.status(201).json(result);
};

export default insertProduct;
