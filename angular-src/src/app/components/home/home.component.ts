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
  pagenumber;
  // category

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.pagenumber = 1;
    this.generateProducts(null, this.pagenumber);
  }

  generateProducts(filter, pagenumber) {
    this.productService.getProducts(filter, pagenumber).subscribe(products => {
      this.products = products;
      this.products = this.products.products;
      this.products = Object.values(this.products);
    });
  }

  nextPage() {
    this.pagenumber = this.pagenumber + 1;
    this.generateProducts(this.filterVal, this.pagenumber);
  }

  previousPage() {
    this.pagenumber = this.pagenumber - 1;
    this.generateProducts(this.filterVal, this.pagenumber);
  }

  isLast() {
    // hardcoded
    if (this.pagenumber == 10) {
      return true;
    } else {
      return false;
    }
  }

  isFirst() {
    if (this.pagenumber == 1 && this.products.length > 20) {
      return true;
    } else {
      return false;
    }
  }

  noFilter() {
    this.generateProducts(null, this.pagenumber);
  }

  priceAscending() {
    this.filterVal = "priceAsc";
    this.generateProducts(this.filterVal, this.pagenumber);
  }

  priceDescending() {
    this.filterVal = "priceDesc";
    this.generateProducts(this.filterVal, this.pagenumber);
  }

  nameAscending() {
    this.filterVal = "nameAsc";
    this.generateProducts(this.filterVal, this.pagenumber);
  }

  nameDescending() {
    this.filterVal = "nameDesc";
    this.generateProducts(this.filterVal, this.pagenumber);
  }

  // price desc

  // price asc

  // name desc

  // name asc

  // Future: category
}
