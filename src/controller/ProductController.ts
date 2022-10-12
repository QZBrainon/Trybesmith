import { Request, Response } from 'express';
import ProductService from '../service/ProductService';

const productService = new ProductService();

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productService.insertProduct(product);
  return res.status(201).json(result);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const result = await productService.getAllProducts();
  return res.status(200).json(result);
};

export {
  insertProduct,
  getAllProducts,
};
