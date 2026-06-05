import express from "express";
const router = express.Router();
import memberController from "./controllers/member_controller";

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);

// ======  // =======
// router.get("/", memberController.goHome);

// router.get("/login", memberController.goLogin);

// router.get("/signup", memberController.goSignup);

export default router;
