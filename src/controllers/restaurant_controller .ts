import { T } from "../libs/types/common";
import { Request, Response } from "express";
// ============ Future usage ========= //

import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

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

restaurantController.processSingup = async (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> processSingup");
    // console.log("Body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSingup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error, processSingup", err);
    res.send(err);
  }
};

export default restaurantController;
