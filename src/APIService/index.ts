import AuthService from "./authService";
import BlogService from "./blogService";

class APIServiceInstances {
  AuthServiceRunner!: AuthService;
  MessageServiceRunner!: BlogService;
  baseURL: string = "https://blog-backend-06914.herokuapp.com";

  getAuthRunner() {
    if (!this.AuthServiceRunner) {
      this.AuthServiceRunner = new AuthService(this.baseURL);
    }
    return this.AuthServiceRunner;
  }
  getBlogRunner() {
    if (!this.MessageServiceRunner) {
      this.MessageServiceRunner = new BlogService(this.baseURL);
    }
    return this.MessageServiceRunner;
  }
}

const APIService = new APIServiceInstances();

export default APIService;
