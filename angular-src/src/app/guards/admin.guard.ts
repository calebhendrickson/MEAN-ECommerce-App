import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // checking for admin
  canActivate() {
    if (this.authService.getAdmin()) {
      return true;
    } else {
      this.router.navigate(["/"]);
      return false;
    }
  }
}
