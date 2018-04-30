import {NgModule} from "@angular/core";
import {WelcomeComponent} from "../../home/welcome.component";
import {RouterModule} from "@angular/router";
import {ProductListComponent} from "../../products/product-list.component";
import {ProductGuardService} from "../../products/product-guard.service";
import {ProductDetailComponent} from "../../products/product-detail-component";
import {ProductModule} from "../../products/product.module";

@NgModule({
  declarations: [],
  imports: [
    ProductModule,
    RouterModule.forRoot(
      [
        { path: "products", component: ProductListComponent },
        { path: "products/:id", canActivate: [ProductGuardService], component: ProductDetailComponent },
        { path: "welcome", component: WelcomeComponent },
        { path: "", redirectTo: "welcome", pathMatch: "full" }
      ])
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
