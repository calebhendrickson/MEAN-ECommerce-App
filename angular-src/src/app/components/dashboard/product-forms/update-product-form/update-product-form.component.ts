import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { ProductService } from "../../../../services/product.service";

@Component({
  selector: "app-update-product-form",
  templateUrl: "./update-product-form.component.html",
  styleUrls: ["./update-product-form.component.css"]
})
export class UpdateProductFormComponent implements OnInit {
  name: String;
  description: String;
  price: String;
  image: String;
  product;
  _id;

  constructor(
    private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this._id = params.get("_id");
    });

    this.productService.getProductById(this._id).subscribe(product => {
      this.product = product;
      this.populateFormValues(this.product.product);
    });
  }

  populateFormValues(product) {
    this._id = product._id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.image = product.image;
  }

  onUpdate() {
    const product = {
      _id: this._id,
      name: this.name,
      description: this.description,
      price: this.price,
      image: this.image
    };

    this.productService.updateProduct(product).subscribe(() => {
      this.router.navigate(["/dashboard"]);
    });
  }
}
