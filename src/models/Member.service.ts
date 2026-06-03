import MemberModule from "../schema/Member.module";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Error";
import { MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModule;
  }

  public async processSingup(input: MemberInput): Promise<Member> {
    console.log("3");
    const exist = await this.memberModel
      .findOne({ memberType: MemberType.RESTAURANT })
      .exec();

    // console.log("exist:", exist)
    console.log("4");
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

    console.log("before:", input.memberPassword);
    const salt = await bcrypt.genSalt();
    input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
    console.log("after:", input.memberPassword);

    try {
      console.log("5");
      console.log("INPUT:", input);
      const result = await this.memberModel.create(input);
      result.memberPassword = "";
      return result;
    } catch (err) {
      console.log("6, Error, processSingup", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  // ======== ====== =====
  public async processLogin(input: LoginInput): Promise<Member> {
    const member = await this.memberModel
      .findOne(
        { memberNick: input.memberNick },
        { memberNick: 1, memberPassword: 1 },
        // majburiy password va nickni oldik va _id ni ham olgandin ochirdik(_id: 1,)
      )
      .exec();

    // memberni unique ligini tekshiradi
    if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
    // ==== <===> ====
    // const isMatch = member.memberPassword === input.memberPassword;
    const isMatch = await bcrypt.compare(
      input.memberPassword,
      member.memberPassword,
    );

    // ==== <===> ====

    // console.log("isMatch:", isMatch);

    // memberni unique ligini tekshiradi
    if (!isMatch)
      throw new Errors(HttpCode.UNAUTHORIZED, Message.Wrong_PASSWORD);

    return await this.memberModel.findById(member._id).exec();
  }
}

export default MemberService;

// const newResult = new this.memberModel(input);
// const result = await newResult.save();

// biz barcha requestlar un async dan foydalanamiz shunga async, await, promise/void/string dan foydalanayapmizza
// membertype ni T katta harf bn yozdim
