import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  product: any;
  cart: [];

  constructor(private http: HttpClient) {}

  getProducts() {
    // the http get method returns an observable of http responses
    // we need to unwrap the http response objects that the http
    // get method sends back because we still want the service to
    // return products not an http reposne object that the component
    // has to deal with. To do this, we can use the rxjs operator
    // called map

    // map method expects a function as its argument, this function
    // will receive an argument that will be one of the http response
    // objects in the observable
    return this.http.get("products/dashboard").pipe(map(res => res));
  }

  // add product
  addProduct(product) {
    return this.http.post("products/dashboard", product);
  }

  // delete product
  deleteProduct(product) {
    return this.http.delete(`products/dashboard/${product._id}`);
  }

  // update product
  updateProduct(product) {
    return this.http.put(`products/dashboard/${product._id}`, product);
  }

  // retrieve by id
  getProductById(_id) {
    return this.http.get(`products/dashboard/${_id}`).pipe(map(res => res));
  }

  // add to cart
  addToCart(product) {
    localStorage.setItem("products", JSON.stringify(product));
  }

  // get products in cart
  getProductsInCart() {
    var result = JSON.parse(localStorage.getItem("products"));
    if (result == null) {
      var nullArray = [];
      return nullArray;
    }

    return JSON.parse(localStorage.getItem("products"));
  }

  removeAllFromCart() {
    return localStorage.removeItem("products");
  }

  updateCartCount(count) {
    this.currentCartCount.next(count);
  }

  removeFromCart(product) {
    var cart = localStorage.getItem("products");
    var jsonObj = eval(cart);

    jsonObj.forEach(function(result, index) {
      if (result._id == product._id) {
        jsonObj.splice(index, 1);
      }
    });
    localStorage.setItem("products", JSON.stringify(jsonObj));
  }

  toggleAddToCartButton(value) {
    if (value == false) {
      return true;
    } else {
      return false;
    }
  }
}
