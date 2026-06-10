import ProductModel from "../schema/Product.module";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }
}
export default ProductService;
