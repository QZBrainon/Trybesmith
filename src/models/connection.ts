import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || 'password',
  host: process.env.MYSQL_HOST || 'localhost',
});