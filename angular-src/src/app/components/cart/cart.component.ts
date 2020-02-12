import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  defaultQuantity = 1;
  productsInCart = [];
  allTotal;
  cartItemCount;
  finalTotal;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productsInCart = this.productService.getProductsInCart();
    console.log(this.productsInCart);
    if (this.productsInCart[0] == null) {
      this.productsInCart.length = 0;
    } else {
      for (let i in this.productsInCart) {
        this.productsInCart[i].Quantity = 1;
      }
    }
    this.productService.removeAllFromCart();
    this.productService.addToCart(this.productsInCart);
    this.calculateAllTotal(this.productsInCart);

    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);
  }

  onAddQuantity(product) {
    this.productsInCart = this.productService.getProductsInCart();
    this.productsInCart.find(p => p._id == product._id).Quantity =
      product.Quantity + 1;

    this.productService.removeAllFromCart();
    this.productService.addToCart(this.productsInCart);
    this.calculateAllTotal(this.productsInCart);
  }

  onRemoveQuantity(product) {
    this.productsInCart = this.productService.getProductsInCart();
    this.productsInCart.find(p => p._id == product._id).Quantity =
      product.Quantity - 1;
    this.productService.removeAllFromCart();
    this.productService.addToCart(this.productsInCart);
    this.calculateAllTotal(this.productsInCart);
  }

  calculateAllTotal(allItems) {
    let total = 0;
    for (let i in allItems) {
      total = total + allItems[i].Quantity * allItems[i].price;
    }
    this.allTotal = total;
  }

  getQuantity(quantity) {
    if (quantity < 2) {
      return false;
    } else {
      return true;
    }
  }

  checkCart() {
    if (this.productsInCart == null) {
      return false;
    } else if (this.productsInCart.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  onRemoveProduct(product) {
    this.productService.removeFromCart(product);
    this.productsInCart = this.productService.getProductsInCart();

    this.cartItemCount = this.productsInCart.length;
    this.productService.updateCartCount(this.cartItemCount);

    this.calculateAllTotal(this.productsInCart);
  }
}
