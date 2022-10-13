import { Request, Response } from 'express';
import UserService from '../service/UserService';

const userService = new UserService();

const register = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userService.register(user);
  return res.status(201).json({ token: result });
};

const login = async (req:Request, res:Response) => {
  const usernameAndPassword = req.body;
  const result = await userService.login(usernameAndPassword);
  if (result === undefined) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(200).json({ token: result });
};

export { register, login };