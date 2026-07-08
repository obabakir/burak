import { ProductStatus } from "../libs/enums/product.enum";
import { shapeIntoMongoosObjectId } from "../libs/config";
import Errors, { HttpCode, Message } from "../libs/Error";
import {
  Product,
  ProductInput,
  ProductInquiry,
  ProductUpdateInput,
} from "../libs/types/product";
import ProductModel from "../schema/Product.module";
import { T } from "../libs/types/common";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  // SPA
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    // console.log("inquiry:", inquiry);
    const match: T = { productStatus: ProductStatus.PROCESS };

    if (inquiry.productCollection) {
      match.productCollection = inquiry.productCollection;
    }
    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 }
        : { [inquiry.order]: -1 };
    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit },
        { $limit: inquiry.limit * 1 },
      ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  // SSR
  public async getAllProducts(): Promise<Product[]> {
    // biz qaytuvchi malumotni array korinishiga ==>> Promise<Product[]>
    // databazada malumot kop
    const result = await this.productModel.find().exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
    return result;
  }

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      return await this.productModel.create(input);
    } catch (err) {
      console.log("Error, model: createNewProduct ", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput,
  ): Promise<Product> {
    id = shapeIntoMongoosObjectId(id);
    const result = await this.productModel
      .findOneAndUpdate({ _id: id }, input, { new: true })
      // 3 ta argument: ozgariluvchi, ozgargan qiymat, va natija(agar natija berilmasa databazada malumot ozgaradi lekin bizning brawzerimizda korinmaydi ekan)
      .exec();

    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.CREATE_FAILED);

    // console.log("result:", result);
    // for test
    return result;
    // string => Object.Id
  }
}
export default ProductService;
