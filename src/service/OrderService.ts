import connection from '../models/connection';
import OrderModel from '../models/OrdersModel';
import ProductModel from '../models/ProductModel';

class OrderService {
  model: OrderModel;

  productModel: ProductModel = new ProductModel(connection);

  constructor() {
    this.model = new OrderModel(connection);
  }

  getAllOrders = async () => {
    const result = await this.model.getAllOrders();
    return result;
  };

  postOrder = async (userId:number, productsIds:number[]) => {
    const orderId = await this.model.postOrder(userId);
    await this.productModel.updateProduct(orderId, productsIds);
    return ({ message: 'ok' });
  };
}

export default OrderService;