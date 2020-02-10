import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "product-item",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  // name: String;
  // description: String;
  // price: String;
  // image: String;
  @Input() product;
  //products;
  //image;

  @Output() delete = new EventEmitter();
  //@Output() update = new EventEmitter();

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    // this.productService.getProduct().subscribe(products => {
    //   this.products = products;
    //   this.products = this.products.products;
    //   //this.products = Object.keys(this.product).map(key => )
    //   this.products = Object.values(this.products);
    //   console.log(this.products);
    //   this.products.map(product => {
    //     product.image = `http://localhost:3000/${product.image}`;
    //     console.log(this.products);
    //   });
    // });
  }

  onProductDelete() {
    this.delete.emit(this.product);
  }

  onProductUpdate() {
    console.log(this.product._id);
    this.router.navigate(["/update", this.product._id]);
    console.log(this.router.navigate(["/update", this.product._id]));
    //this.update.emit(this.product);
  }
  // addtocart

  // view details
}
