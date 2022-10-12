import IProduct from '../interfaces';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

class ProductService {
  model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async insertProduct(productInfo: IProduct) {
    const { name, amount } = productInfo; 
    const insertId = await this.model.insertProduct(productInfo); 
    return ({ id: insertId, name, amount });
  }

  async getAllProducts() {
    const result = await this.model.getAllProducts();
    return result;
  }
}

export default ProductService;