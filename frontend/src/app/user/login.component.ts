import {Component} from "@angular/core";
import {UserService} from "./user.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  templateUrl: "./login.component.html"
})
export class LoginComponent {
  errorMessage: String;
  constructor(private userService: UserService, private router: Router) {
    this.userService = userService;
  }
  login(loginForm: NgForm ) {
    if (loginForm && loginForm.valid) {
      const userName = loginForm.form.value.userName;
      const password = loginForm.form.value.password;
      this.userService.login(userName, password );
      this.router.navigate(["/products"]);
    } else {
        this.errorMessage = "Please enter username and password";
    }
  }
}
