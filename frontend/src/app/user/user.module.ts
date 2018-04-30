import {NgModule} from "@angular/core";
import {UserService} from "./user.service";
import {LoginComponent} from "./login.component";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: "login", component: LoginComponent }
    ])
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
  ],
  providers: [
    UserService
  ]
})
export class UserModule {
}
