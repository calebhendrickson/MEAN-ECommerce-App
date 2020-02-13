import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../../../services/product.service";

@Component({
  selector: "product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.css"]
})
export class ProductListingComponent implements OnInit {
  // TODO understand these
  @Input() product;
  @Output() delete = new EventEmitter();

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {}

  onProductDelete() {
    this.delete.emit(this.product);
  }

  onProductUpdate() {
    this.router.navigate(["/update", this.product._id]);
  }
}
