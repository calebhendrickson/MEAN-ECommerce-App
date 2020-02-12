import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";

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
    private router: Router
  ) {}

  ngOnInit() {
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
    this.productService.removeFromCart(product);
    this.productsInCart = this.productService.getProductsInCart();

    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);
    this.button = false;
  }

  onProductUpdate() {
    this.router.navigate(["/update", this.product._id]);
  }

  checkCart(product) {
    this.productsInCart = this.productService.getProductsInCart();
    if (this.productsInCart == null) {
      this.button = false;
    } else if (this.productsInCart[0] == null) {
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
