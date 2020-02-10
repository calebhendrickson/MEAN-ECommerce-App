import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  cartItemCount;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.currentMessage.subscribe(
      msg => (this.cartItemCount = msg)
    );
  }

  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show("you are logged out bye", {
      cssClass: "alert-success",
      timeout: 3000
    });
    this.router.navigate(["/login"]);
    return false;
  }
}
