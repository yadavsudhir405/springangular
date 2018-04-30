import {Component} from "@angular/core";
import {UserService} from "./user/user.service";
import {Router} from "@angular/router";
@Component({
  selector : "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(private authService: UserService, private router: Router) {}
  pageTitle  = "Aceme Project Management";
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/welcome");
  }
}
