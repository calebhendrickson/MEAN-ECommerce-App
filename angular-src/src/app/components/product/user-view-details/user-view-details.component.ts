import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-user-view-details",
  templateUrl: "./user-view-details.component.html",
  styleUrls: ["./user-view-details.component.css"]
})
export class UserViewDetailsComponent implements OnInit {
  apiUrl: string = "http://localhost:3000/";
  name: String;
  description: String;
  price: String;
  image: String;
  // add: true;
  // remove: false;
  _id;
  product;
  productsInCart;
  cartItemCount;
  button = false;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get("_id");
    });

    this.productService.getProductById(this._id).subscribe(product => {
      this.product = product;
      this.product = this.product.product;
      console.log(this.product);
      console.log("hello this has to pop up?");
      console.log("hello this has to pop up?");
      this.onUpdate(this.product);
      this.checkCart(this.product);
      console.log(this.button);
    });

    this.productsInCart = this.productService.getProductsInCart();
    console.log(this.productsInCart);
    if (this.productsInCart == null) {
      this.cartItemCount = 0;
    } else {
      this.cartItemCount = this.productsInCart.length;
    }
    this.productService.updateCartCount(this.cartItemCount);
  }

  onUpdate(product) {
    console.log("checking for update?");
    this._id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.image = `https://s3-us-east-2.amazonaws.com/flybuy-bulldog/${product.image}`;
  }

  // check if product is in the cart,
  // if it is, render remove button
  // if it is not, render add button

  // use ngIf set to a boolean in the html code

  onAddToCart() {
    this.productsInCart = this.productService.getProductsInCart();
    if (this.productsInCart == null) {
      this.productsInCart = [];
      this.productsInCart.push(this.product);
      this.productService.addToCart(this.productsInCart);
      // TODO show success message
    } else {
      let tempProduct = this.productsInCart.find(p => p._id == this._id);
      if (tempProduct == null) {
        this.productsInCart.push(this.product);
        this.productService.addToCart(this.productsInCart);
        // TODO show success message
      }
    }
    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);
    this.button = true;
  }

  onRemoveFromCart() {
    this.productService.removeFromCart(this.product);
    this.productsInCart = this.productService.getProductsInCart();

    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);
    this.button = false;
  }

  checkCart(product) {
    this.productsInCart = this.productService.getProductsInCart();
    console.log(this.productsInCart);
    if (this.productsInCart == null) {
      this.button = false;
      return;
    } else if (this.productsInCart[0] == null) {
      this.button = false;
    } else {
      // let tempProduct = this.productsInCart.find(p => p._id == this._id);
      this.productsInCart.map(cart => {
        if (cart._id == product._id) {
          this.button = true;
        }
      });
    }
  }
}
