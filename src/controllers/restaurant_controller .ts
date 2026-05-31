import { T } from "../libs/types/common";
import { Request, Response } from "express";
// ============ Future usage ========= //

import MemberService from "../models/Member.service";

// Adminka BSSR uchun
const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goHome");
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.goLogin = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
  }
};
restaurantController.goSignup = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

export default restaurantController;
