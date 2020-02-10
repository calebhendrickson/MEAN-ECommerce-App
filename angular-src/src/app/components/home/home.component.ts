import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
//import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  apiUrl: string = "localhost:3000";
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
        product.image = `http://localhost:3000/${product.image}`;
      });
    });
  }
}
