import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";


import {AppComponent} from "./app.component";
import {HttpClientModule} from "@angular/common/http";
import {ProductModule} from "./products/product.module";
import {ProductGuardService} from "./products/product-guard.service";
import {UserModule} from "./user/user.module";
import { AppRoutingModule } from "./app-routing.module";
import {WelcomeComponent} from "./home/welcome.component";


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductModule,
    UserModule,
    AppRoutingModule
  ],
  providers: [ ProductGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
