import mongoose, { Schema } from "mongoose";
import { MemberStaus, MemberType } from "../libs/enums/member.enum";

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
    },

    memberStatus: {
      type: String,
      enum: MemberStaus,
      default: MemberStaus.ACTIVE,
    },

    memberNick: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },
    memberPhone: {
      type: String,
      index: { unique: true, sparse: true },
      required: true,
    },

    memberPasword: {
      type: String,
      select: false,
      required: true,
    },

    memberAddress: {
      type: String,
    },

    memberDesc: {
      type: String,
    },

    memberImages: {
      type: String,
    },

    memberPoints: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true },
); //updateAt, createAt qiymatini beradibu timestamps

// if we export it will turn into schema module

export default mongoose.model("Member", memberSchema);
