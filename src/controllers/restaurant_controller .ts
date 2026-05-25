import { T } from "../libs/types/common";
import { Request, Response } from "express";

// Adminka BSSR uchun
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.goLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
  }
};
restaurantController.goSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

export default restaurantController;
