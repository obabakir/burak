import { T } from "../libs/types/common";
import { Request, Response } from "express";

const memberController: T = {};
memberController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page");
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

memberController.goLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
  }
};
memberController.goSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

export default memberController;
