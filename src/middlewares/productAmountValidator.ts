import { NextFunction, Request, Response } from 'express';
import productSchema from '../joi/productSchema';
import HttpExeption from '../shared/httpException';

const productAmountValidator = (req:Request, res:Response, next: NextFunction) => {
  const validation = productSchema.validate(req.body);
  const errorMsg = validation.error?.details[0].message;
  switch (errorMsg) {
    case '"amount" is required':
      throw new HttpExeption(400, errorMsg);

    case '"amount" must be a string':
      throw new HttpExeption(422, errorMsg);
    
    case '"amount" length must be at least 3 characters long':
      throw new HttpExeption(422, errorMsg);
      
    default:
      break;
  }
  return next();
};

export default productAmountValidator;