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
    return this.http.get("users/dashboard").pipe(map(res => res));
  }

  // getImages() {
  //   return this.http
  //     .get("http://localhost:3000/users/images")
  //     .pipe(map(res => res));
  // }

  addProduct(product) {
    return this.http.post("users/dashboard", product);
  }

  // addImage(image){
  //   const formData = new FormData();
  //   formData.append('file', image);
  //   return this.http.post("http://localhost:3000/users/images", formData);
  // }

  // delete product
  deleteProduct(product) {
    return this.http.delete(`users/dashboard/${product._id}`);
  }

  // deleteImage(image){
  //   return this.http.delete(
  //     `http://localhost:3000/users/dashboard/${image._id}`
  //   );
  // }

  // update product
  updateProduct(product) {
    return this.http.put(`dashboard/${product._id}`, product);
  }

  getProductById(_id) {
    return this.http.get(`users/dashboard/${_id}`).pipe(map(res => res));
  }

  // getImageById(_id){
  //   return this.http
  //   .get(`http://localhost:3000/users/images/${_id}`)
  //   .pipe(map(res => res));
  // }

  addToCart(product) {
    localStorage.setItem("products", JSON.stringify(product));
  }

  getProductsInCart() {
    var result = JSON.parse(localStorage.getItem("products"));
    console.log(result);
    if (result == null) {
      var nullArray = [];
      console.log(nullArray);
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
    console.log(jsonObj);

    jsonObj.forEach(function(result, index) {
      if (result._id == product._id) {
        jsonObj.splice(index, 1);
      }
    });

    //var newList = jsonObj.splice(p => p._id == product._id);
    localStorage.setItem("products", JSON.stringify(jsonObj));
  }

  toggleAddToCartButton(value) {
    if (value == false) {
      return true;
    } else {
      return false;
    }
  }

  // view product
}

// interface Product {
//   _id: string;
//   name: string;
//   description: string;
//   price: number;
//   image: string;
// }

// interface ProductResponse {
//   products: Product[];
// }
