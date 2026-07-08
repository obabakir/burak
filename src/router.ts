import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";
import uploader from "./libs/utils/uploader";
import productController from "./controllers/product_controller";

/** Member **/
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail,
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single(
    "memberImages",
  ) /** req.file  ga alohida joylab beradi yani reqdagi barchacha malumotlardan ajratib oladi**/,
  memberController.updateMember,
);
router.get("/member/top-users", memberController.getTopUsers);

/** Member **/
/** Product **/
router.get("/product/all", productController.getProducts);
/** Product **/
/** Ordert **/
export default router;
