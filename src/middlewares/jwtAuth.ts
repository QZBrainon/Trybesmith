import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import jsonwebtoken, { JwtPayload } from 'jsonwebtoken';

dotenv.config();

const secret = process.env.JWT_SECRET || 'tokensecreto';

const jwtAuth = async (req:Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const verify = jsonwebtoken.verify(token, secret);
    const { username, password, userId } = verify as JwtPayload;
    res.locals.username = username;
    res.locals.password = password;
    res.locals.userId = userId;
    return next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default jwtAuth;