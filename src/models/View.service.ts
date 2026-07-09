import Errors, { HttpCode, Message } from "../libs/Error";
import { View, ViewInput } from "../libs/types/view";
import ViewModule from "../schema/View.module";

class ViewService {
  private readonly viewModule;

  constructor() {
    this.viewModule = ViewModule;
  }
  public async checkViewExistence(input: ViewInput): Promise<View> {
    return await this.viewModule
      .findOne({ memberId: input.memberId, viewRefId: input.viewRefId })
      .exec();
  }

  public async insertMemberView(input: ViewInput): Promise<View> {
    try {
      return await this.viewModule.create(input);
    } catch (err) {
      console.log("ERROR, moder: insertMemberView:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }
}

export default ViewService;
