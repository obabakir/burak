import express from "express";
const router = express.Router();
import restaurantController from "./controllers/restaurant_controller ";

// ======  // =======
router.get("/", restaurantController.goHome);

router.get("/login", restaurantController.goLogin);

router.get("/signup", restaurantController.goSignup);

export default router;
