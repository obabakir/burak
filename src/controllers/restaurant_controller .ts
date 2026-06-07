import { T } from "../libs/types/common";
import { Request, Response } from "express";
// ============ Future usage ========= //

import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

// Adminka BSSR uchun
const memberService = new MemberService();
const restaurantController: T = {};
// SPA uchun
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("entered=> goHome");
    res.render("home");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error: goHome =>", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, goSignup", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, goLogin", err);
    res.send(err);
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("1");
    console.log("entered=> processSignup");
    console.log("Body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    console.log("2");

    const result = await memberService.processSignup(newMember);
    //   TODO: SESSION : AUTHENTICATION

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processSignup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log(" processLogin");
    console.log("Body:", req.body);

    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    //   TODO: SESSION : AUTHENTICATION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
