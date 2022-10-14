import { NextFunction, Request, Response } from 'express';
import userSchema from '../joi/userSchema';
import HttpExeption from '../shared/httpException';

const passwordValidator = (req:Request, res:Response, next: NextFunction) => {
  const validation = userSchema.validate(req.body);
  const errorMsg = validation.error?.details[0].message;

  switch (errorMsg) {
    case '"password" is required':
      throw new HttpExeption(400, errorMsg);

    case '"password" must be a string':
      throw new HttpExeption(422, errorMsg);
    
    case '"password" length must be at least 8 characters long':
      throw new HttpExeption(422, errorMsg);
    
    default:
      break;
  }
  return next();
};

export default passwordValidator;