import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { ProductService } from "./services/product.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { AdminGuard } from "./guards/admin.guard";
import { AddProductFormComponent } from "./components/dashboard/product-forms/add-product-form/add-product-form.component";
import { UpdateProductFormComponent } from "./components/dashboard/product-forms/update-product-form/update-product-form.component";
import { ProductComponent } from "./components/product/product/product.component";
import { ProductListComponent } from "./components/product/product-list.component";
import { UserViewProductComponent } from "./components/product/user-view-product/user-view-product.component";
import { UserViewDetailsComponent } from "./components/product/user-view-details/user-view-details.component";
import { CartComponent } from "./components/cart/cart.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AdminGuard]
  },
  { path: "add", component: AddProductFormComponent },
  { path: "cart", component: CartComponent },
  { path: "update/:_id", component: UpdateProductFormComponent },
  { path: "view/:_id", component: UserViewDetailsComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    AddProductFormComponent,
    UpdateProductFormComponent,
    ProductComponent,
    ProductListComponent,
    UserViewProductComponent,
    UserViewDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    AdminGuard,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
