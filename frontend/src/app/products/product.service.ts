import {IProduct} from "./product";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";


@Injectable()
export class ProductService {
  private _httpClient: HttpClient;
  constructor( http: HttpClient) {
      this._httpClient = http;
    }

    getProducts(): Observable<IProduct[]> {

      let url =  "/app/v1/products";
      return this._httpClient.get<IProduct[]>(url)
        .do(data => {
            console.log("All :" + JSON.stringify(data));
        })
        .catch(err => this.handleError(err));

    }

    getProductById(id: Number): Observable<IProduct> {

      let url = "/app/v1/products/"+id;
      return this._httpClient.get<IProduct>(url)
          .do(data => {
            console.log("Product :" +JSON.stringify(data));
          })
          .catch(err => this.handleError(err));
    }


    deleteProduct( product: IProduct ): Observable <{}>  {
       let options = {
           headers: new HttpHeaders({
                'Content-Type': 'application/json'
           })
       };

       let url = "/app/v1/products/"+product.productId;
        return  this._httpClient.delete(url, options);

    }

  private initProduct(): IProduct {
    return {
      productId : 0,
      productName : null,
      productCode : null,
      releaseDate : null,
      price : 0,
      description : null,
      starRating : 0,
      imageUrl : null
    };
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
