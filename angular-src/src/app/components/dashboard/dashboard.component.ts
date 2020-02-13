import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  // getAllProducts() {
  //   this.productService.getProducts();
  // }

  onAddProduct() {
    this.router.navigate(["add"]);
  }
}
