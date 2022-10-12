import connection from '../models/connection';
import OrderModel from '../models/OrdersModel';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  getAllOrders = async () => {
    const result = await this.model.getAllOrders();
    return result;
  };
}

export default OrderService;