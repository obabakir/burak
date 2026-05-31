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
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> processLogin");
    res.send("DONE");
  } catch (err) {
    console.log("Error, processLogin", err);
  }
};

restaurantController.processSingup = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> processSingup");
    res.send("DONE here");
  } catch (err) {
    console.log("Error, processSingup", err);
  }
};

export default restaurantController;
