import { Component, OnInit } from "@angular/core";
import {IProduct} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";

@Component({
  templateUrl: "./product-detail-component.html",
  styleUrls: ["./product-detail-component.css"]
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = "Product Detail";
  product: IProduct;
  errorMessage: String;
  constructor(private _route: ActivatedRoute, private _router: Router, private productService: ProductService ) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get("id");
    this.pageTitle += `:${id}`;
    this.productService.getProductById(id).subscribe(
        product => {
          this.product = product;
        }
        ,error => {
          this.errorMessage = <any>error;
        });
  }
  onBack() {
    this._router.navigate(["/products"]);
  }
  onEdit() {
    this._router.navigate(["/products", this.product.productId, "edit"]);
  }

}
