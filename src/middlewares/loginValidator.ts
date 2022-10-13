import { NextFunction, Request, Response } from 'express';
import loginSchema from '../joi/loginSchema';

const loginValidator = (req:Request, res:Response, next: NextFunction) => {
  const validation = loginSchema.validate(req.body);
  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
  return next();
};

export default loginValidator;