import { T } from "../libs/types/common";
import { Request, Response } from "express";

import MemberService from "../models/Member.service";
import { Member, LoginInput, MemberInput } from "../libs/types/member";
import Errors from "../libs/Error";

// React un/ qaytamizza
const memberService = new MemberService();
const memberController: T = {};
memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");

    const input: MemberInput = req.body,
      result: Member = await memberService.signup(input);
    console.log("result", result);
    //   ToDo: TOKENS : AUTHENTICATION

    res.json({ member: result });
  } catch (err) {
    console.log("Error, signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    // console.log("Body:", req.body);

    const input: LoginInput = req.body,
      result = await memberService.login(input);
    //   ToDo: TOKENS : AUTHENTICATION

    res.json({ member: result });
  } catch (err) {
    console.log("Error, login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
