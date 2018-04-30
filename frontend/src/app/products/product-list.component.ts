import {Component, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
@Component({
  // selector: "app-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  errorMessage: string;
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filterText = "cart";
  filteredProducts: IProduct[];
  products: IProduct[] ;
  constructor(private _product_Service: ProductService) {
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this._product_Service.getProducts().subscribe(products => { this.products = products; }
    , error2 => {this.errorMessage = <any>error2; });
    this.filterText = "cart";
  }
  starRatingClicked(message: string): void {
    this.pageTitle = "Product List :" + message;
  }
}
