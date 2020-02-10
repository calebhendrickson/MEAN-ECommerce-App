import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-user-view-product",
  templateUrl: "./user-view-product.component.html",
  styleUrls: ["./user-view-product.component.css"]
})
export class UserViewProductComponent implements OnInit {
  productsInCart;
  cartItemCount;
  button = false;
  @Input() product;

  @Output() addtocart = new EventEmitter();

  constructor(
    private productService: ProductService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // var temp = this.productService.getProductsInCart();
    // let count = 0;
    // console.log(temp);
    // for (let i in temp){
    //   count++;
    // }
    this.productsInCart = this.productService.getProductsInCart();
    if (this.productsInCart == null) {
      this.cartItemCount = 0;
    } else {
      this.cartItemCount = this.productsInCart.length;
    }
    this.checkCart(this.product);
    this.productService.updateCartCount(this.cartItemCount);
  }

  onAddToCart(productFromView) {
    //this.addtocart.emit(productFromView);
    this.productsInCart = this.productService.getProductsInCart();
    if (this.productsInCart == null) {
      this.productsInCart = [];
      this.productsInCart.push(productFromView);
      this.productService.addToCart(this.productsInCart);
      // TODO show success message
    } else {
      let tempProduct = this.productsInCart.find(
        p => p._id == this.product._id
      );
      if (tempProduct == null) {
        this.productsInCart.push(productFromView);
        this.productService.addToCart(this.productsInCart);
        // TODO show success message
      }
    }
    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);
    this.button = true;
  }

  onRemoveFromCart(product) {
    //console.log(this.product);
    this.productService.removeFromCart(product);
    this.productsInCart = this.productService.getProductsInCart();

    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);
    this.button = false;
  }

  onProductUpdate() {
    console.log(this.product._id);
    this.router.navigate(["/update", this.product._id]);
    console.log(this.router.navigate(["/update", this.product._id]));
    //this.update.emit(this.product);
  }

  checkCart(product) {
    this.productsInCart = this.productService.getProductsInCart();

    // if not logged in: this.productsInCart

    // if logged in: this.productsInCart[0]

    if (this.authService.loggedIn()) {
      if (this.productsInCart[0] == null) {
        this.button = false;
      } else {
        this.productsInCart.map(cart => {
          if (cart._id == product._id) {
            this.button = true;
          }
        });
      }
    } else {
      if (this.productsInCart == null) {
        this.button = false;
      } else {
        this.productsInCart.map(cart => {
          if (cart._id == product._id) {
            this.button = true;
          }
        });
      }
    }
  }
  // let tempProduct = this.productsInCart.find(p => p._id == this._id);

  // addtocart

  // view details
}
