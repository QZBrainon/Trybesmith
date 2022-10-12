import { Request, Response } from 'express';
import UserService from '../service/UserService';

const userService = new UserService();

const register = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userService.register(user);
  return res.status(201).json({ token: result });
};

export default register;