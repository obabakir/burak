import { T } from "../libs/types/common";
import { NextFunction, Request, Response } from "express";
// ============ Future usage ========= //

import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/Error";

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
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goSignup");
    res.render("signup");
  } catch (err) {
    console.log("Error, goSignup", err);
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("standard-check entered=> goLogin");
    res.render("login");
  } catch (err) {
    console.log("Error, goLogin", err);
    res.send(err);
    res.redirect("/admin");
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
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/signup') </script>`,
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log(" processLogin");
    // console.log("Body:", req.body);

    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
    //   TODO: SESSION : AUTHENTICATION
    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processLogin", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/login') </script>`,
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    // console.log("Body:", req.body);
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error, logout", err);
    res.send(err);
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log(" checkAuthSession");
    if (req.session?.member)
      res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Error, checkAuthSession", err);
    res.redirect("/admin");
  }
};

restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert("${message}"); window.location.replace("/admin/login") </script>`,
    );
  }
};

export default restaurantController;
