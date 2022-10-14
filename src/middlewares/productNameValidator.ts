import { NextFunction, Request, Response } from 'express';
import productSchema from '../joi/productSchema';
import HttpExeption from '../shared/httpException';

const productNameValidator = (req:Request, res:Response, next: NextFunction) => {
  const validation = productSchema.validate(req.body);
  const errorMsg = validation.error?.details[0].message;
  switch (errorMsg) {
    case '"name" is required':
      throw new HttpExeption(400, errorMsg);
      break;

    case '"name" must be a string':
      throw new HttpExeption(422, errorMsg);
      break;
    
    case '"name" length must be at least 3 characters long"':
      throw new HttpExeption(422, errorMsg);
      break;
  
    default:
      break;
  }
  return next();
};

export default productNameValidator;