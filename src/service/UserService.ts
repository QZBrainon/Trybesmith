import jsonwebtoken from 'jsonwebtoken';
import dotenv from 'dotenv';
import { ILogin, IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

dotenv.config();
const secret = process.env.JWT_SECRET || 'tokensecreto';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  generateToken = async (user:IUser) => {
    const payload = { username: user.username, pw: user.password };
    return jsonwebtoken.sign(payload, secret);
  };

  register = async (user:IUser) => {
    await this.model.register(user);
    const token = await this.generateToken(user);
    return token;
  };

  login = async (user:ILogin) => {
    const { username, password } = user;
    const foundUser = await this.model.login(user);
    if (foundUser.length === 0) return undefined;
    const payload = { username, password };
    const token = jsonwebtoken.sign(payload, secret);
    return token;
  };
}

export default UserService;