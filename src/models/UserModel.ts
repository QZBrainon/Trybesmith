import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ILogin, IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(conn:Pool) {
    this.connection = conn;
  }

  register = async ({ username, classe, level, password }:IUser) => {
    const [result] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    return result;
  };

  login = async ({ username, password }:ILogin) => {
    const [[result]] = await this.connection
      .execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Users WHERE username=? AND password=?',
      [username, password],
    );
    return result;
  };
}  