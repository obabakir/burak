import { T } from "../libs/types/common";
import { Request, Response } from "express";
// ============ Future usage ========= //

import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

// Adminka BSSR uchun
const memberService = new MemberService();
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

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error, goLogin", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("1");
    console.log("standard-check entered=> processSignup");
    console.log("Body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    console.log("2");

    const result = await memberService.processSignup(newMember);
    //   ToDo: SESSION : AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error, processSignup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log(" processLogin");
    console.log("Body:", req.body);

    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    //   ToDo: SESSION : AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error, processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
