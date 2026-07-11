import { ExtendedRequest } from "../libs/types/member";
import { T } from "../libs/types/common";
import { Response } from "express";
import Errors, { HttpCode } from "../libs/Error";
import OrderService from "../models/Order.service";
import { OrderInquiry } from "../libs/types/order";
import { OrderStatus } from "../libs/enums/order.enum";

const orderService = new OrderService();
const orderController: T = {};
orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("entered: createOrder");

    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json({ result });
  } catch (err) {
    console.log("Error, createOrder,", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.getMyOrders = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("entered: getMyOrders");
    const { page, limit, orderStatus } = req.query;
    console.log("req.query => :", req.query);
    // kirib kelayotgagan page va limit string korinishida edi uni number korinishiga otkazdik:
    // { page: '1', limit: '5', orderStatus: 'PAUSE' }
    const inquiry: OrderInquiry = {
      page: Number(page),
      limit: Number(limit),
      orderStatus: orderStatus as OrderStatus,
    };

    console.log("inquiry type =>:", inquiry);
    // { page: 1, limit: 5, orderStatus: 'PAUSE' }
    const result = await orderService.getMyOrders(req.member, inquiry);

    res.status(HttpCode.CREATED).json({ result });
  } catch (err) {
    console.log("Error, getMyOrders,", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default orderController;
