import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../interfaces';

class ProductModel {
  connection: Pool;

  constructor(conn:Pool) {
    this.connection = conn;
  }

  getAllProducts = async () => {
    const [result] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');
    return result;
  };

  insertProduct = async (product:IProduct) => {
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)', 
      [product.name, product.amount],
    );
    return insertId;
  };

  updateProduct = async (orderId:number, products:number[]) => {
    const arrayOfPromisses = products.map(async (productId) => this.connection
      .execute<ResultSetHeader>(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?', 
      [orderId, productId],
    ));
    const result = await Promise.all(arrayOfPromisses);
    return result;
  };
}

export default ProductModel;