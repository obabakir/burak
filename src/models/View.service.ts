import ViewModule from "../schema/View.module";

class ViewService {
  private readonly viewModule;

  constructor() {
    this.viewModule = ViewModule;
  }
}

export default ViewService;
