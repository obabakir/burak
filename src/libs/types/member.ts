import { ObjectId } from "mongoose";

import { MemberStaus, MemberType } from "../enums/member.enum";

import { Request } from "express";
import { Session } from "express-session";

//database dan qayrtayotgaan malumot un
export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStaus;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImages?: string;
  memberPoints: number;
  createAt: Date;
  updateAt: Date;
}

export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStaus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImages?: string;
  memberPoints?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}
export interface AdminRequest extends Request {
  member: Member;
  session: Session & { member: Member };
}
