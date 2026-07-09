import { Request, Response } from "express";
import Errors, { HttpCode } from "../libs/Error";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";
import { Message } from "../libs/Error";
import { Product, ProductInput, ProductInquiry } from "../libs/types/product";
import { AdminRequest, ExtendedRequest } from "../libs/types/member";
import { ProductCollection } from "../libs/enums/product.enum";

const productService = new ProductService();
const productController: T = {};

// SPA

productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");
    // const data = await productService.getAllProducts();

    /* 
    const query = req.query;
    console.log("query:", query);
    ?name=Abubakir&nationality=uzbek&skills=developer
    */

    /*
    const params = req.params;
    console.log("params:", params);
    /checkingparams/1234test
    */

    const { page, limit, order, productCollection, search } = req.query;
    const inquiry: ProductInquiry = {
      order: String(order),
      page: Number(page),
      limit: Number(limit),
    };
    if (productCollection) {
      inquiry.productCollection = productCollection as ProductCollection;
    }
    if (search) {
      inquiry.search = String(search);
    }

    // console.log(
    //   `page: ${page}, limit: ${limit}, order: ${order}, productCollection: ${productCollection}, search: ${search}`,
    // );
    // console.log("query:", req.query);
    const result = await productService.getProducts(inquiry);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct=>");
    const id = String(req.params.id);
    // console.log("req.member:", req.member);
    // member bolmasa :undifined /// member bolsa = memberning malumotini

    const memberId = req.member?._id ?? null;

    const result = await productService.getProduct(memberId, id);

    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
// SSR
productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    console.log("data:", data);
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("createNewProduct");
    console.log("req.body malumotlari", req.body);
    // console.log("req.files", req.files);

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVER_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path;
    });

    await productService.createNewProduct(data);

    res.send(
      `<script> alert("Successfully cretion"); window.location.replace('/admin/product/all') </script>`,
    );
  } catch (err) {
    console.log("Error, createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/product/all') </script>`,
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenProduct");
    // const id = req.params.id; ==>> error korsatdi typescript, shunga id type ni qoydim
    const id = String(req.params.id);
    const result = await productService.updateChosenProduct(id, req.body);

    // res --> string => json format
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
export default productController;
