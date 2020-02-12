import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "product-item",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
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
