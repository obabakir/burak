import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);

export default router;
