import MemberModule from "../schema/Member.module";
import { Member, MemberInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Error";
import { MemberType } from "../libs/enums/member.enum";

class MemberService {
  private readonly memberModel;

  constructor() {
    this.memberModel = MemberModule;
  }

  public async processSingup(input: MemberInput): Promise<Member> {
    const exist = await this.memberModel
      .findOne({ membertype: MemberType.RESTAURANT })
      .exec();

    // console.log("exist:", exist)
    if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    try {
      const result = await this.memberModel.create(input);
      result.memberPasword = "";
      return result;
    } catch (err) {
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default MemberService;

// const newResult = new this.memberModel(input);
// const result = await newResult.save();

// biz barcha requestlar un async dan foydalanamiz shunga async, await, promise/void/string dan foydalanayapmizza
