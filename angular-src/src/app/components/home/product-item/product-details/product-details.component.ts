import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../../../../services/product.service";

@Component({
  selector: "product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  //apiUrl: string = "http://localhost:3000/";
  //this.image = `https://s3-us-east-2.amazonaws.com/flybuy-bulldog/${product.image}`;
  name: String;
  description: String;
  price: String;
  image: String;
  _id;
  product;
  productsInCart;
  cartItemCount;
  button = false;

  constructor(
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
      this.onUpdate(this.product);
      this.checkCart(this.product);
    });

    this.productsInCart = this.productService.getProductsInCart();
    if (this.productsInCart == null) {
      this.cartItemCount = 0;
    } else {
      this.cartItemCount = this.productsInCart.length;
    }
    this.productService.updateCartCount(this.cartItemCount);
  }

  onUpdate(product) {
    this._id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.image = product.image;
  }

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
    if (this.productsInCart == null) {
      this.button = false;
      return;
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
