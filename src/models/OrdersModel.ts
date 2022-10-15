import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';

class OrderModel {
  connection: Pool;

  constructor(conn:Pool) {
    this.connection = conn;
  }

  getAllOrders = async () => {
    const [result] = await this.connection
      .execute<RowDataPacket[]>(
      `SELECT Trybesmith.Orders.id, Trybesmith.Orders.userId,
      JSON_ARRAYAGG(Trybesmith.Products.id) as productsIds
      FROM Trybesmith.Orders
      INNER JOIN Trybesmith.Products ON Trybesmith.Orders.id=Trybesmith.Products.orderId
      group by orderId`,
    );
    return result;
  };

  postOrder = async (userId:number) => { 
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  };
}

export default OrderModel;