import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";
import uploader from "./libs/utils/uploader";

/** Member **/
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
  uploader("members").single("memberImages"),
  memberController.updateMember,
);
router.get("/member/top-users", memberController.getTopUsers);

/** Member **/
/** Product **/
/** Ordert **/
export default router;
