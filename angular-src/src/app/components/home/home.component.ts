import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
//import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  apiUrl: string = "http://localhost:3000/";
  products;

  constructor(
    private productService: ProductService //private sanitization: DomSanitizer
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.products = this.products.products;

      //this.products = Object.keys(this.product).map(key => )
      this.products = Object.values(this.products);
      this.products.map(product => {
        console.log(product.image);
        //product.image = `https://s3-us-east-2.amazonaws.com/flybuy-bulldog/${product.image}`;
        product.image = product.image;
      });
    });
  }
}
