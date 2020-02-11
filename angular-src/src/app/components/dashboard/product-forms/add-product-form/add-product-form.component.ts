import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ProductService } from "../../../../services/product.service";

@Component({
  selector: "app-add-product-form",
  templateUrl: "./add-product-form.component.html",
  styleUrls: ["./add-product-form.component.css"]
})
export class AddProductFormComponent implements OnInit {
  name: string;
  description: string;
  price: string;
  image: File;

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit() {}

  onProductAdd() {
    var product = new FormData();
    product.append("name", this.name);
    product.append("description", this.description);
    product.append("price", this.price);
    product.append("file", this.image);
    console.log(this.name);
    console.log(this.description);
    console.log(this.price);
    console.log(this.image);

    // const product = {
    //   name: this.name,
    //   description: this.description,
    //   price: this.price,
    //   image: this.image
    // };

    console.log(product);

    this.productService.addProduct(product).subscribe(() => {
      this.router.navigate(["/dashboard"]);
    });
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.image = file;
    }
  }
}
