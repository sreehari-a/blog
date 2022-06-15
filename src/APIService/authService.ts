import Runner from "./runner";
import User from "../common/models/user";

// type User = {
//   id: number;
//   username: string;
//   email: string;
//   provider: string;
//   confirmed: boolean;
//   blocked: boolean;
//   createdAt: string;
//   updatedAt: string;
//  }
type AuthResponse = {
  jwt: string;
  user: User;
};
type Credentials = {
  identifier: string;
  password: string;
};

class AuthService {
  runner;
  baseURL;
  tokenExpirationTimer: any;
  constructor(baseUrl: string) {
    this.runner = new Runner();
    this.baseURL = baseUrl;
  }
  async signUser(credentials: Credentials, isSignUp?: boolean) {
    const data: AuthResponse = await this.runner.performPOST(
      `${this.baseURL}/auth/local`,
      credentials
    );
    const { jwt, user } = data;
    this.handleAuth(jwt, user);
    return data;
  }
  private handleAuth(token: string, user: User) {
    const {
      id,
      username,
      email,
      provider,
      confirmed,
      blocked,
      createdAt,
      updatedAt,
    } = user;
    const newUser = new User(
      id,
      username,
      email,
      provider,
      confirmed,
      blocked,
      createdAt,
      updatedAt,
      token,
    );
    sessionStorage.setItem("userData", JSON.stringify(newUser));
    sessionStorage.setItem("token", token);
  }
}

export default AuthService;
