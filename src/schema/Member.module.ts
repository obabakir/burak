import mongoose, { Schema } from "mongoose";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
//   ===== building options: ========
// 1) Schema first ==> Biz shu usuldan foydalanamizza
// 2) Code first
// mongoose documentation dan foydalangan ekan

const memberSchema = new Schema(
  {
    memberType: {
      type: String,
      enum: MemberType,
      default: MemberType.USER,
      // required: false, ==> bydefault yani talab etilmaydi,
    },

    memberStatus: {
      type: String,
      enum: MemberStatus,
      default: MemberStatus.ACTIVE,
      // required: false, ==> bydefault yani talab etilmaydi, statusi bolmagan holda ham amallar bajara oladi
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
      // tel raqami majburiy bb usiz hech qanday amal bajara olmaydi
    },

    memberPassword: {
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
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
); //updateAt, createAt qiymatini beradibu timestamps

// if we export it will turn into schema module

export default mongoose.model("Member", memberSchema);
// yuqoridagi Mongoose ni model methodi bizga ushbu klasimizni schemaga ozgartirib beradi va uning ichidagi memberSchema ni export qilayapmizza

// password, nick da ozgartirish qildim
