import { Component, OnInit } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";
import {IProduct} from "./product";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {

  pageTitle = "Product Edit";
  product: IProduct;
  errorMessage: String;
  constructor(private activatedRoute: ActivatedRoute, private _router: Router
    , private productService: ProductService) { }

  ngOnInit() {
    // let id = +this.activatedRoute.snapshot.paramMap.get("id");
    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];
      this.getProduct(id);
    });

  }

  getProduct(id: Number){
    if(id === 0 ){
      this.product = this.getEmptyProduct();
    } else {
      this.productService.getProductById(id).subscribe(
          product => {
            this.product = product;
          },
          error => {
            this.errorMessage = <any>error;
          }
      )
    }
  }
  saveProduct() {

  }
  deleteProduct() {
    if ( this.product){
      console.log("Deleting knowen Product");
      this.productService.deleteProduct(this.product).subscribe(
          () =>{console.log("Deleted Products "+ JSON.stringify(this.product))}
          ,error2 => {
            this.errorMessage = <any>error2;
          }
      );
    }
    this._router.navigate(["/products"])
  }

  getEmptyProduct(): IProduct {
    return {
      productId: 0,
      productName: null,
      productCode: null,
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null,
    }
  }

}
