import { OrderStatus } from "../enums/order.enum";
import { ObjectId } from "mongoose";
import { Product } from "./product";

export interface OrderItem {
  _id: ObjectId;
  itemQuantity: number;
  itemPrice: number;
  orderId: ObjectId;
  productId: ObjectId;
  createAt: Date;
  updateAt: Date;
}

export interface Order {
  _id: ObjectId;
  orderTotal: number;
  orderDelivery: number;
  orderStatus: OrderStatus;
  memberId: ObjectId;
  createAt: Date;
  updateAt: Date;
  // from agrigation
  orderItems: OrderItem[];
  productData: Product[];
  // yuqorida Productni chaqirib oldik, havodan kelgani yoq har ikkisi
}
export interface OrderItemInput {
  itemQuantity: number;
  itemPrice: number;
  productId: ObjectId;
  orderId?: ObjectId;
}
export interface OrderInquiry {
  page: number;
  limit: number;
  orderStatus: OrderStatus;
}
