import {Injectable} from "@angular/core";
import {User} from "./user";

@Injectable()
export class UserService {
  loggedInUser: User;
  isLoggedIn(): Boolean {
    if ( this.loggedInUser ) {
      return true;
    } else {
      return false;
    }
  }
  login(userName: String, password: String): User {
    console.log("Validating username and password");
    this.loggedInUser = {
      id: 12,
      username: userName,
      isAdmin: false
    };
    return this.loggedInUser;
  }
  logout() {
    console.log("Loggin out user");
    this.loggedInUser = null;
  }
}
