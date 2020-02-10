import { Component, OnInit } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
    private flashMessagesService: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    // required fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessagesService.show("Please fill in all fields idiot", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    // validate email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessagesService.show("Please use valid email idiot", {
        cssClass: "alert-danger",
        timeout: 3000
      });
      return false;
    }

    // may have to implement functionality to check if username/email already exists

    // Register User
    // since its an observable, we need to subscribe to it
    this.authService.registerUser(user).subscribe(data => {
      if ((data as any).success) {
        this.flashMessagesService.show(
          "Congratulations you have won 10000000 dollars you are our 1000000 registered user",
          {
            cssClass: "alert-success",
            timeout: 3000
          }
        );
        this.router.navigate(["/login"]);
      } else {
        this.flashMessagesService.show(
          "Congratulations you idiot somethine went wrong",
          {
            cssClass: "alert-danger",
            timeout: 3000
          }
        );
        this.router.navigate(["/login"]);
      }
    });
  }
}
