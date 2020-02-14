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
  filterVal;
  // category

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.generateProducts(null);
  }

  generateProducts(filter) {
    this.productService.getProducts(filter).subscribe(products => {
      this.products = products;
      this.products = this.products.products;
      this.products = Object.values(this.products);
    });
  }

  noFilter() {
    this.generateProducts(null);
  }

  priceAscending() {
    this.filterVal = "priceAsc";
    this.generateProducts(this.filterVal);
  }

  priceDescending() {
    this.filterVal = "priceDesc";
    this.generateProducts(this.filterVal);
  }

  nameAscending() {
    this.filterVal = "nameAsc";
    this.generateProducts(this.filterVal);
  }

  nameDescending() {
    this.filterVal = "nameDesc";
    this.generateProducts(this.filterVal);
  }

  // price desc

  // price asc

  // name desc

  // name asc

  // Future: category
}
