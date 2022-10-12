import { Pool, RowDataPacket } from 'mysql2/promise';
import { IUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(conn:Pool) {
    this.connection = conn;
  }

  register = async ({ username, classe, level, password }:IUser) => {
    const [result] = await this.connection
      .execute<RowDataPacket[]>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?,?,?,?)',
      [username, classe, level, password],
    );
    return result;
  };
}  