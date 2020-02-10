import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) {}

  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("users/register", user, {
        headers: headers
      })
      .pipe(map(res => res));
  }

  authenticateUser(user) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("users/authenticate", user, {
        headers: headers
      })
      .pipe(map(res => res));
  }

  getProfile() {
    this.loadToken();
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: this.authToken
    });
    return this.http
      .get("users/profile", {
        headers: headers
      })
      .pipe(map(res => res));
  }

  storeUserData(token, user) {
    localStorage.setItem("id_token", token);
    localStorage.setItem("user", JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem("id_token");
    this.authToken = token;
  }

  loggedIn() {
    this.loadToken();
    const loggedIn = new JwtHelperService();
    if (this.authToken == null) {
      return false;
    } else {
      return !loggedIn.isTokenExpired(this.authToken);
    }
  }

  getAdmin() {
    // make sure this line is working if error

    const localsession = JSON.parse(localStorage.getItem("user"));
    if (localsession == null) {
      return false;
    }
    const result = localsession.type;
    //console.log(result);
    return result;
    // this.getProfile().subscribe(
    //   profile => {
    //     this.user = (profile as any).user;
    //   },
    //   err => {
    //     //console.log(err);
    //     return false;
    //   }
    // );
    // if ((this.user as any).type == true) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
