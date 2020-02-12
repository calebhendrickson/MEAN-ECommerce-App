import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  //apiUrl: string = "http://localhost:3000/";
  //product.image = `https://s3-us-east-2.amazonaws.com/flybuy-bulldog/${product.image}`;
  products;

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.products = this.products.products;
      this.products = Object.values(this.products);
      // this.products.map(product => {
      //   product.image = product.image;
      // });
    });
  }
}
