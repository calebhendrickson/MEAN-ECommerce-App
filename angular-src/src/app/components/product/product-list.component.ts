import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(products => {
      this.products = products;
      this.products = this.products.products;
      //this.products = Object.keys(this.product).map(key => )
      this.products = Object.values(this.products);
      // console.log(this.products);
      this.products.map(product => {
        product.image = `http://localhost:3000/${product.image}`;
        console.log(this.products);
      });
    });
  }

  onDelete(product) {
    this.productService.deleteProduct(product).subscribe(() => {
      this.ngOnInit();
    });
  }
}
