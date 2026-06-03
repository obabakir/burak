import { ObjectId } from "mongoose";

import { MemberStaus, MemberType } from "../enums/member.enum";

//database dan qayrtayotgaan malumot un
export interface Member {
  _id: ObjectId;
  memberType: MemberType;
  memberStatus: MemberStaus;
  memberNick: string;
  memberPhone: string;
  memberPasword?: string;
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
  memberPasword: string;
  memberAddress?: string;
  memberDesc?: string;
  memberImages?: string;
  memberPoints?: number;
}

export interface LoginInput {
  memberNick: string;
  memberPasword: string;
}
