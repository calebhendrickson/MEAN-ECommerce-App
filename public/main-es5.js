(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1></h1>\n<h1>Your Cart</h1>\n<ul class=\"list-group\">\n  <table>\n    <thead>\n      <tr *ngIf=\"checkCart()\">\n        <th></th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Name\n        </th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Description\n        </th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Price\n        </th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Quantity\n        </th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Change Quantity\n        </th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Cost\n        </th>\n        <th\n          style=\"vertical-align: middle;\n          text-align: center;\"\n        >\n          Remove Item\n        </th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let product of productsInCart; let q = index\">\n      <td\n        style=\"width:200px; height:200px; vertical-align: middle;\n        text-align: center;\"\n      >\n        <div class=\"product-grid__img-wrapper\">\n          <img\n            class=\"images\"\n            src=\"{{ product.image }}\"\n            height=\"auto\"\n            width=\"100px\"\n          />\n        </div>\n      </td>\n      <td\n        style=\"width:200px; height:200px; vertical-align: middle;\n        text-align: center;\"\n      >\n        {{ product.name }}\n      </td>\n      <td\n        style=\"width:200px; height:200px; vertical-align: middle;\n        text-align: center;\"\n      >\n        {{ product.description }}\n      </td>\n      <td\n        style=\"width:200px; height:200px; vertical-align: middle;\n        text-align: center;\"\n      >\n        {{ product.price }}\n      </td>\n      <td\n        style=\"width:200px; height:200px; vertical-align: middle;\n        text-align: center;\"\n      >\n        {{ product.Quantity }}\n      </td>\n      <td\n        style=\"width:100px; height:100px; vertical-align: middle;\n        text-align: center;\"\n      >\n        <button (click)=\"onAddQuantity(product)\" class=\"btn btn-success\">\n          +\n        </button>\n        <input\n          type=\"text\"\n          [ngModel]=\"product.Quantity\"\n          (ngModelChange)=\"product.Quantity = $event\"\n          class=\"form-control\"\n        />\n        <button\n          *ngIf=\"getQuantity(product.Quantity)\"\n          (click)=\"onRemoveQuantity(product)\"\n          class=\"btn btn-danger\"\n        >\n          -\n        </button>\n      </td>\n      <td\n        style=\"width:100px; height:100px; vertical-align: middle;\n        text-align: center;\"\n      >\n        {{ product.price * product.Quantity }}\n      </td>\n      <td\n        style=\"width:100px; height:100px; vertical-align: middle;\n        text-align: center;\"\n      >\n        <button (click)=\"onRemoveProduct(product)\">Remove</button>\n      </td>\n    </tr>\n  </table>\n</ul>\n\n<div *ngIf=\"checkCart()\" style=\"vertical-align: middle; text-align: right;\">\n  <h2>Total Comes to ${{ allTotal }}</h2>\n  <div style=\"vertical-align: middle; text-align: right; padding-right: 100px\">\n    <button>Checkout</button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Dashboard</h2>\n<p>Welcome to your dashboard... whatever that is</p>\n<button (click)=\"onAddProduct()\">Add Product</button>\n<product-list></product-list>\n\n<!-- single button to go to form to addproduct-->\n\n<!--buttons on every product to update(send you to update form) or delete-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardProductFormsAddProductFormAddProductFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Add Product</h2>\n<form (submit)=\"onProductAdd()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"description\"\n      name=\"description\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"text\" [(ngModel)]=\"price\" name=\"price\" class=\"form-control\" />\n  </div>\n\n  <label>Image</label>\n  <input\n    type=\"file\"\n    name=\"image\"\n    class=\"form-control\"\n    multiple\n    (change)=\"selectImage($event)\"\n  />\n\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardProductFormsUpdateProductFormUpdateProductFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Update Product</h2>\n<form (submit)=\"onUpdate()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Description</label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"description\"\n      name=\"description\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Price</label>\n    <input type=\"text\" [(ngModel)]=\"price\" name=\"price\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Image</label>\n    <input type=\"text\" [(ngModel)]=\"image\" name=\"image\" class=\"form-control\" />\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-list/product-list.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-list/product-list.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardProductListProductListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content\">\n  <div>\n    <form>\n      <input type=\"radio\" name=\"sort\" (click)=\"priceAscending()\" />Price\n      Ascending<br />\n      <input type=\"radio\" name=\"sort\" (click)=\"priceDescending()\" />Price\n      Descending<br />\n      <input type=\"radio\" name=\"sort\" (click)=\"nameAscending()\" />Name\n      Ascending<br />\n      <input type=\"radio\" name=\"sort\" (click)=\"nameDescending()\" />Name\n      Descending<br />\n    </form>\n  </div>\n  <!-- content here -->\n  <ul class=\"list-group\">\n    <product-listing\n      *ngFor=\"let product of products\"\n      [product]=\"product\"\n      (delete)=\"onDelete($event)\"\n    ></product-listing>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-list/product-listing/product-listing.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-list/product-listing/product-listing.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDashboardProductListProductListingProductListingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<tr>\n  <td\n    style=\"width:200px; height:200px; vertical-align: middle;\n    text-align: center;\"\n  >\n    <div class=\"product-grid__img-wrapper\">\n      <img\n        class=\"images\"\n        src=\"{{ product.image }}\"\n        height=\"auto\"\n        width=\"100px\"\n      />\n    </div>\n  </td>\n  <td\n    style=\"width:500px; height:200px; vertical-align: middle;\n        text-align: center;\"\n  >\n    <h4>{{ product.name }}</h4>\n  </td>\n  <td\n    style=\"width:500px; height:200px; vertical-align: middle;\n        text-align: center;\"\n  >\n    {{ product.price }}\n  </td>\n  <td\n    style=\"width:500px; height:100px; vertical-align: middle;\n        text-align: center;\"\n  >\n    <a routerLink=\"/update/{{ product._id }}\"> Update </a>\n  </td>\n  <td\n    style=\"width:500px; height:100px; vertical-align: middle;\n        text-align: center;\"\n  >\n    <button (click)=\"onProductDelete()\">Delete</button>\n  </td>\n</tr>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron text-center\">\n  <h1>FlyBuy Store</h1>\n  <p class=\"lead\">\n    Welcome to our store. Have it your way\n  </p>\n  <h1></h1>\n  <p>In Stock:</p>\n  <!-- <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n    <a class=\"btn btn-dark\" [routerLink]=\"['/login']\">Login</a>\n  </div> -->\n</div>\n\n<div>\n  <form>\n    <input type=\"radio\" name=\"sort\" (click)=\"priceAscending()\" />Price\n    Ascending<br />\n    <input type=\"radio\" name=\"sort\" (click)=\"priceDescending()\" />Price\n    Descending<br />\n    <input type=\"radio\" name=\"sort\" (click)=\"nameAscending()\" />Name\n    Ascending<br />\n    <input type=\"radio\" name=\"sort\" (click)=\"nameDescending()\" />Name\n    Descending<br />\n  </form>\n</div>\n\n<section>\n  <product-item\n    *ngFor=\"let product of products\"\n    [product]=\"product\"\n  ></product-item>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/product-item/product-details/product-details.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/product-item/product-details/product-details.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeProductItemProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Product Details</h2>\n<div>\n  <div>\n    <img class=\"images\" src=\"{{ image }}\" />\n    <div>\n      <div>\n        <h4>{{ name }}</h4>\n      </div>\n      <div>\n        {{ price }}\n      </div>\n    </div>\n    <div>\n      <button *ngIf=\"!button\" (click)=\"onAddToCart()\">Add to Cart</button>\n      <button *ngIf=\"button\" (click)=\"onRemoveFromCart()\">\n        Remove From Cart\n      </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/product-item/product-item.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/product-item/product-item.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeProductItemProductItemComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Single product -->\n<div class=\"product-grid__product-wrapper\">\n  <div class=\"product-grid__product\">\n    <div class=\"product-grid__img-wrapper\">\n      <img src=\"{{ product.image }}\" alt=\"Img\" class=\"product-grid__img\" />\n    </div>\n    <span class=\"product-grid__title\">{{ product.name }}</span>\n    <span class=\"product-grid__price\">{{ product.price }}</span>\n    <div class=\"product-grid__extend-wrapper\">\n      <div class=\"product-grid__extend\">\n        <p class=\"product-grid__description\">{{ product.description }}</p>\n        <span\n          class=\"product-grid__btn product-grid__add-to-cart\"\n          *ngIf=\"!button\"\n          (click)=\"onAddToCart(product)\"\n          ><i class=\"fa fa-cart-arrow-down\"></i> Add to Cart</span\n        >\n        <span\n          class=\"product-grid__btn product-grid__add-to-cart\"\n          *ngIf=\"button\"\n          (click)=\"onRemoveFromCart(product)\"\n          ><i class=\"fa fa-cart-arrow-down\"></i> Remove From Cart</span\n        >\n        <span\n          class=\"product-grid__btn product-grid__view\"\n          routerLink=\"/view/{{ product._id }}\"\n          ><i class=\"fa fa-eye\"></i> View more</span\n        >\n      </div>\n    </div>\n  </div>\n</div>\n<!-- end Single product -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input\n      type=\"text\"\n      class=\"form-control\"\n      [(ngModel)]=\"username\"\n      name=\"username\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input\n      type=\"password\"\n      class=\"form-control\"\n      [(ngModel)]=\"password\"\n      name=\"password\"\n    />\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\" />\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">FLYBUY</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarsExampleDefault\"\n    aria-controls=\"navbarsExampleDefault\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li>\n        <a class=\"nav-link\" [routerLink]=\"['/']\"\n          >Home <span class=\"sr-only\">(current)</span></a\n        >\n      </li>\n    </ul>\n\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li *ngIf=\"!authService.loggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a>\n      </li>\n      <li *ngIf=\"authService.getAdmin()\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n      <li>\n        <a class=\"nav-link\" [routerLink]=\"['/cart']\"\n          >Cart <span class=\"badge badge-light\">{{ cartItemCount }}</span></a\n        >\n      </li>\n      <li *ngIf=\"authService.loggedIn()\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"user\">\n  <h2></h2>\n  <h2 class=\"page-header\">Hello, {{ user.name }}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{ user.username }}</li>\n    <li class=\"list-group-item\">Email: {{ user.email }}</li>\n  </ul>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"page-header\">Register</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Username</label>\n    <input\n      type=\"text\"\n      [(ngModel)]=\"username\"\n      name=\"username\"\n      class=\"form-control\"\n    />\n  </div>\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" />\n  </div>\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input\n      type=\"password\"\n      [(ngModel)]=\"password\"\n      name=\"password\"\n      class=\"form-control\"\n    />\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\" />\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = "MEAN APP COMPONENT";
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/register/register.component */
    "./src/app/components/register/register.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/dashboard/dashboard.component */
    "./src/app/components/dashboard/dashboard.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/product.service */
    "./src/app/services/product.service.ts");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */


    var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./guards/auth.guard */
    "./src/app/guards/auth.guard.ts");
    /* harmony import */


    var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./guards/admin.guard */
    "./src/app/guards/admin.guard.ts");
    /* harmony import */


    var _components_dashboard_product_forms_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/dashboard/product-forms/add-product-form/add-product-form.component */
    "./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.ts");
    /* harmony import */


    var _components_dashboard_product_forms_update_product_form_update_product_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/dashboard/product-forms/update-product-form/update-product-form.component */
    "./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.ts");
    /* harmony import */


    var _components_dashboard_product_list_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/dashboard/product-list/product-listing/product-listing.component */
    "./src/app/components/dashboard/product-list/product-listing/product-listing.component.ts");
    /* harmony import */


    var _components_dashboard_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/dashboard/product-list/product-list.component */
    "./src/app/components/dashboard/product-list/product-list.component.ts");
    /* harmony import */


    var _components_home_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home/product-item/product-item.component */
    "./src/app/components/home/product-item/product-item.component.ts");
    /* harmony import */


    var _components_home_product_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/home/product-item/product-details/product-details.component */
    "./src/app/components/home/product-item/product-details/product-details.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/components/cart/cart.component.ts");

    const appRoutes = [{
      path: "",
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
    }, {
      path: "register",
      component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    }, {
      path: "login",
      component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: "dashboard",
      component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"],
      canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"]]
    }, {
      path: "add",
      component: _components_dashboard_product_forms_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_19__["AddProductFormComponent"]
    }, {
      path: "cart",
      component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__["CartComponent"]
    }, {
      path: "update/:_id",
      component: _components_dashboard_product_forms_update_product_form_update_product_form_component__WEBPACK_IMPORTED_MODULE_20__["UpdateProductFormComponent"]
    }, {
      path: "view/:_id",
      component: _components_home_product_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailsComponent"]
    }, {
      path: "profile",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"],
      canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]]
    }];
    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["DashboardComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"], _components_dashboard_product_forms_add_product_form_add_product_form_component__WEBPACK_IMPORTED_MODULE_19__["AddProductFormComponent"], _components_dashboard_product_forms_update_product_form_update_product_form_component__WEBPACK_IMPORTED_MODULE_20__["UpdateProductFormComponent"], _components_dashboard_product_list_product_listing_product_listing_component__WEBPACK_IMPORTED_MODULE_21__["ProductListingComponent"], _components_dashboard_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_22__["ProductListComponent"], _components_home_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_23__["ProductItemComponent"], _components_home_product_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_24__["ProductDetailsComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_25__["CartComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes), angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"].forRoot()],
      providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_13__["ValidateService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"], _guards_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"], _services_product_service__WEBPACK_IMPORTED_MODULE_15__["ProductService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/cart/cart.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/cart/cart.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/cart/cart.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/cart/cart.component.ts ***!
    \***************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");

    let CartComponent = class CartComponent {
      constructor(productService) {
        this.productService = productService;
        this.defaultQuantity = 1;
        this.productsInCart = [];
      }

      ngOnInit() {
        this.productsInCart = this.productService.getProductsInCart();
        console.log(this.productsInCart);

        if (this.productsInCart[0] == null) {
          this.productsInCart.length = 0;
        } else {
          for (let i in this.productsInCart) {
            this.productsInCart[i].Quantity = 1;
          }
        }

        this.productService.removeAllFromCart();
        this.productService.addToCart(this.productsInCart);
        this.calculateAllTotal(this.productsInCart);
        this.cartItemCount = this.productsInCart.length;
        this.productService.updateCartCount(this.cartItemCount);
      }

      onAddQuantity(product) {
        this.productsInCart = this.productService.getProductsInCart();
        this.productsInCart.find(p => p._id == product._id).Quantity = product.Quantity + 1;
        this.productService.removeAllFromCart();
        this.productService.addToCart(this.productsInCart);
        this.calculateAllTotal(this.productsInCart);
      }

      onRemoveQuantity(product) {
        this.productsInCart = this.productService.getProductsInCart();
        this.productsInCart.find(p => p._id == product._id).Quantity = product.Quantity - 1;
        this.productService.removeAllFromCart();
        this.productService.addToCart(this.productsInCart);
        this.calculateAllTotal(this.productsInCart);
      }

      calculateAllTotal(allItems) {
        let total = 0;

        for (let i in allItems) {
          total = total + allItems[i].Quantity * allItems[i].price;
        }

        this.allTotal = total;
      }

      getQuantity(quantity) {
        if (quantity < 2) {
          return false;
        } else {
          return true;
        }
      }

      checkCart() {
        if (this.productsInCart == null) {
          return false;
        } else if (this.productsInCart.length == 0) {
          return false;
        } else {
          return true;
        }
      }

      onRemoveProduct(product) {
        this.productService.removeFromCart(product);
        this.productsInCart = this.productService.getProductsInCart();
        this.cartItemCount = this.productsInCart.length;
        this.productService.updateCartCount(this.cartItemCount);
        this.calculateAllTotal(this.productsInCart);
      }

    };

    CartComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
    }];

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-cart",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/components/cart/cart.component.css")).default]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/dashboard.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/dashboard/dashboard.component.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppComponentsDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");

    let DashboardComponent = class DashboardComponent {
      constructor(productService, router) {
        this.productService = productService;
        this.router = router;
      }

      ngOnInit() {} // getAllProducts() {
      //   this.productService.getProducts();
      // }


      onAddProduct() {
        this.router.navigate(["add"]);
      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/components/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.css":
  /*!****************************************************************************************************!*\
    !*** ./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.css ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardProductFormsAddProductFormAddProductFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Byb2R1Y3QtZm9ybXMvYWRkLXByb2R1Y3QtZm9ybS9hZGQtcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: AddProductFormComponent */

  /***/
  function srcAppComponentsDashboardProductFormsAddProductFormAddProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddProductFormComponent", function () {
      return AddProductFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/product.service */
    "./src/app/services/product.service.ts");

    let AddProductFormComponent = class AddProductFormComponent {
      constructor(router, productService) {
        this.router = router;
        this.productService = productService;
      }

      ngOnInit() {}

      onProductAdd() {
        var product = new FormData();
        product.append("name", this.name);
        product.append("description", this.description);
        product.append("price", this.price);
        product.append("file", this.image);
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

    };

    AddProductFormComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }];

    AddProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-product-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-product-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-product-form.component.css */
      "./src/app/components/dashboard/product-forms/add-product-form/add-product-form.component.css")).default]
    })], AddProductFormComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.css":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.css ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardProductFormsUpdateProductFormUpdateProductFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Byb2R1Y3QtZm9ybXMvdXBkYXRlLXByb2R1Y3QtZm9ybS91cGRhdGUtcHJvZHVjdC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: UpdateProductFormComponent */

  /***/
  function srcAppComponentsDashboardProductFormsUpdateProductFormUpdateProductFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProductFormComponent", function () {
      return UpdateProductFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/product.service */
    "./src/app/services/product.service.ts");

    let UpdateProductFormComponent = class UpdateProductFormComponent {
      constructor(router, productService, route) {
        this.router = router;
        this.productService = productService;
        this.route = route;
      }

      ngOnInit() {
        this.route.paramMap.subscribe(params => {
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

    };

    UpdateProductFormComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    UpdateProductFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-update-product-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-product-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-product-form.component.css */
      "./src/app/components/dashboard/product-forms/update-product-form/update-product-form.component.css")).default]
    })], UpdateProductFormComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-list/product-list.component.css":
  /*!******************************************************************************!*\
    !*** ./src/app/components/dashboard/product-list/product-list.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardProductListProductListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-list/product-list.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/dashboard/product-list/product-list.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppComponentsDashboardProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");

    let ProductListComponent = class ProductListComponent {
      constructor(productService) {
        this.productService = productService;
        this.apiUrl = "http://localhost:3000/";
      }

      ngOnInit() {
        this.generateProducts(null);
      }

      onDelete(product) {
        this.productService.deleteProduct(product).subscribe(() => {
          this.ngOnInit();
        });
      }

      generateProducts(filter) {
        this.productService.getProducts(filter).subscribe(products => {
          this.products = products;
          this.products = this.products.products;
          this.products = Object.values(this.products);
        });
      }

      noFilter() {
        this.generateProducts(null);
      }

      priceAscending() {
        this.filterVal = "priceAsc";
        this.generateProducts(this.filterVal);
      }

      priceDescending() {
        this.filterVal = "priceAsc";
        this.generateProducts(this.filterVal);
      }

      nameAscending() {
        this.filterVal = "nameAsc";
        this.generateProducts(this.filterVal);
      }

      nameDescending() {
        this.filterVal = "nameDesc";
        this.generateProducts(this.filterVal);
      }

    };

    ProductListComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
    }];

    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "product-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-list/product-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-list.component.css */
      "./src/app/components/dashboard/product-list/product-list.component.css")).default]
    })], ProductListComponent);
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-list/product-listing/product-listing.component.css":
  /*!*************************************************************************************************!*\
    !*** ./src/app/components/dashboard/product-list/product-listing/product-listing.component.css ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDashboardProductListProductListingProductListingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3RpbmcvcHJvZHVjdC1saXN0aW5nLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/dashboard/product-list/product-listing/product-listing.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/components/dashboard/product-list/product-listing/product-listing.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: ProductListingComponent */

  /***/
  function srcAppComponentsDashboardProductListProductListingProductListingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListingComponent", function () {
      return ProductListingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/product.service */
    "./src/app/services/product.service.ts");

    let ProductListingComponent = class ProductListingComponent {
      constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      onProductDelete() {
        this.delete.emit(this.product);
      }

      onProductUpdate() {
        this.router.navigate(["/update", this.product._id]);
      }

    };

    ProductListingComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductListingComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductListingComponent.prototype, "delete", void 0);
    ProductListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "product-listing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-listing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dashboard/product-list/product-listing/product-listing.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-listing.component.css */
      "./src/app/components/dashboard/product-list/product-listing/product-listing.component.css")).default]
    })], ProductListingComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.css":
  /*!****************************************************!*\
    !*** ./src/app/components/home/home.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\r\n  width: 68em;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  color: #777;\r\n  font-family: \"Open Sans\", Arial, sans-serif;\r\n}\r\n.product-grid {\r\n  width: 60em;\r\n  margin: 2rem auto;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__title {\r\n  height: auto;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__title:after {\r\n  display: none;\r\n}\r\n.product-grid__wrapper {\r\n  margin-left: -1rem;\r\n  margin-right: -1rem;\r\n}\r\n.product-grid__product-wrapper {\r\n  padding: 1rem;\r\n  float: left;\r\n  width: 33.33333%;\r\n}\r\n.product-grid__product {\r\n  padding: 1rem;\r\n  position: relative;\r\n  cursor: pointer;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n}\r\n.product-grid__product:hover {\r\n  box-shadow: 0px 0px 0px 1px #eee;\r\n  z-index: 50;\r\n}\r\n.product-grid__product:hover .product-grid__extend {\r\n  display: block;\r\n}\r\n.product-grid__img-wrapper {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  height: 150px;\r\n}\r\n.product-grid__img {\r\n  max-width: 100%;\r\n  height: auto;\r\n  max-height: 100%;\r\n}\r\n.product-grid__title {\r\n  margin-top: 0.875rem;\r\n  display: block;\r\n  font-size: 1.125em;\r\n  color: #222;\r\n  height: 3em;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.product-grid__title:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 2.4em;\r\n  height: 1.5em;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(50%, white));\r\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);\r\n}\r\n.product-grid__price {\r\n  color: #e91e63;\r\n  font-weight: bold;\r\n  letter-spacing: 0.4px;\r\n}\r\n.product-grid__extend-wrapper {\r\n  position: relative;\r\n}\r\n.product-grid__extend {\r\n  display: none;\r\n  position: absolute;\r\n  padding: 0 1rem 1rem 1rem;\r\n  margin: 0.4375rem -1rem 0;\r\n  box-shadow: 0px 0px 0px 1px #eee;\r\n  background: #fff;\r\n  border-radius: 0 0 4px 4px;\r\n}\r\n.product-grid__extend:before {\r\n  content: \"\";\r\n  height: 0.875rem;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -0.4375rem;\r\n  left: 0;\r\n  background: #fff;\r\n}\r\n.product-grid__description {\r\n  font-size: 0.875em;\r\n  margin-top: 0.4375rem;\r\n  margin-bottom: 0;\r\n}\r\n.product-grid__btn {\r\n  display: inline-block;\r\n  font-size: 0.875em;\r\n  color: #777;\r\n  background: #eee;\r\n  padding: 0.5em 0.625em;\r\n  margin-top: 0.875rem;\r\n  margin-right: 0.625rem;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.product-grid__btn i.fa {\r\n  margin-right: 0.3125rem;\r\n}\r\n.product-grid__add-to-cart {\r\n  color: #fff;\r\n  background: #e91e63;\r\n}\r\n.product-grid__add-to-cart:hover {\r\n  background: #ee4c83;\r\n}\r\n.product-grid__view {\r\n  color: #777;\r\n  background: #eee;\r\n}\r\n.product-grid__view:hover {\r\n  background: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYiwrR0FBd0U7RUFBeEUsd0VBQXdFO0FBQzFFO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogNjhlbTtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJvZHVjdC1ncmlkIHtcclxuICB3aWR0aDogNjBlbTtcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxufVxyXG4ucHJvZHVjdC1ncmlkLnByb2R1Y3QtZ3JpZC0tZmxleGJveCAucHJvZHVjdC1ncmlkX193cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucHJvZHVjdC1ncmlkLnByb2R1Y3QtZ3JpZC0tZmxleGJveCAucHJvZHVjdC1ncmlkX190aXRsZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5wcm9kdWN0LWdyaWQucHJvZHVjdC1ncmlkLS1mbGV4Ym94IC5wcm9kdWN0LWdyaWRfX3RpdGxlOmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3dyYXBwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3Byb2R1Y3Qtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzMuMzMzMzMlO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3Byb2R1Y3Qge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19wcm9kdWN0OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2VlZTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19wcm9kdWN0OmhvdmVyIC5wcm9kdWN0LWdyaWRfX2V4dGVuZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9faW1nLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2ltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3RpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwLjg3NXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fdGl0bGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMi40ZW07XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlIDUwJSk7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fcHJpY2Uge1xyXG4gIGNvbG9yOiAjZTkxZTYzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19leHRlbmQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2V4dGVuZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDAuNDM3NXJlbSAtMXJlbSAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjZWVlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fZXh0ZW5kOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDAuODc1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0wLjQzNzVyZW07XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2Rlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgbWFyZ2luLXRvcDogMC40Mzc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgcGFkZGluZzogMC41ZW0gMC42MjVlbTtcclxuICBtYXJnaW4tdG9wOiAwLjg3NXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fYnRuIGkuZmEge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2FkZC10by1jYXJ0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2FkZC10by1jYXJ0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWU0YzgzO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3ZpZXcge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fdmlldzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");

    let HomeComponent = class HomeComponent {
      // category
      constructor(productService) {
        this.productService = productService;
      }

      ngOnInit() {
        this.generateProducts(null);
      }

      generateProducts(filter) {
        this.productService.getProducts(filter).subscribe(products => {
          this.products = products;
          this.products = this.products.products;
          this.products = Object.values(this.products);
        });
      }

      noFilter() {
        this.generateProducts(null);
      }

      priceAscending() {
        this.filterVal = "priceAsc";
        this.generateProducts(this.filterVal);
      }

      priceDescending() {
        this.filterVal = "priceAsc";
        this.generateProducts(this.filterVal);
      }

      nameAscending() {
        this.filterVal = "nameAsc";
        this.generateProducts(this.filterVal);
      }

      nameDescending() {
        this.filterVal = "nameDesc";
        this.generateProducts(this.filterVal);
      }

    };

    HomeComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
    }];

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/components/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/home/product-item/product-details/product-details.component.css":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/home/product-item/product-details/product-details.component.css ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeProductItemProductDetailsProductDetailsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\r\n  width: 68em;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  color: #777;\r\n  font-family: \"Open Sans\", Arial, sans-serif;\r\n}\r\n.product-grid {\r\n  width: 60em;\r\n  margin: 2rem auto;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__title {\r\n  height: auto;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__title:after {\r\n  display: none;\r\n}\r\n.product-grid__wrapper {\r\n  margin-left: -1rem;\r\n  margin-right: -1rem;\r\n}\r\n.product-grid__product-wrapper {\r\n  padding: 1rem;\r\n  float: left;\r\n  width: 33.33333%;\r\n}\r\n.product-grid__product {\r\n  padding: 1rem;\r\n  position: relative;\r\n  cursor: pointer;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n}\r\n.product-grid__product:hover {\r\n  box-shadow: 0px 0px 0px 1px #eee;\r\n  z-index: 50;\r\n}\r\n.product-grid__product:hover .product-grid__extend {\r\n  display: block;\r\n}\r\n.product-grid__img-wrapper {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  height: 150px;\r\n}\r\n.product-grid__img {\r\n  max-width: 100%;\r\n  height: auto;\r\n  max-height: 100%;\r\n}\r\n.product-grid__title {\r\n  margin-top: 0.875rem;\r\n  display: block;\r\n  font-size: 1.125em;\r\n  color: #222;\r\n  height: 3em;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.product-grid__title:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 2.4em;\r\n  height: 1.5em;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(50%, white));\r\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);\r\n}\r\n.product-grid__price {\r\n  color: #e91e63;\r\n  font-weight: bold;\r\n  letter-spacing: 0.4px;\r\n}\r\n.product-grid__extend-wrapper {\r\n  position: relative;\r\n}\r\n.product-grid__extend {\r\n  display: none;\r\n  position: absolute;\r\n  padding: 0 1rem 1rem 1rem;\r\n  margin: 0.4375rem -1rem 0;\r\n  box-shadow: 0px 0px 0px 1px #eee;\r\n  background: #fff;\r\n  border-radius: 0 0 4px 4px;\r\n}\r\n.product-grid__extend:before {\r\n  content: \"\";\r\n  height: 0.875rem;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -0.4375rem;\r\n  left: 0;\r\n  background: #fff;\r\n}\r\n.product-grid__description {\r\n  font-size: 0.875em;\r\n  margin-top: 0.4375rem;\r\n  margin-bottom: 0;\r\n}\r\n.product-grid__btn {\r\n  display: inline-block;\r\n  font-size: 0.875em;\r\n  color: #777;\r\n  background: #eee;\r\n  padding: 0.5em 0.625em;\r\n  margin-top: 0.875rem;\r\n  margin-right: 0.625rem;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.product-grid__btn i.fa {\r\n  margin-right: 0.3125rem;\r\n}\r\n.product-grid__add-to-cart {\r\n  color: #fff;\r\n  background: #e91e63;\r\n}\r\n.product-grid__add-to-cart:hover {\r\n  background: #ee4c83;\r\n}\r\n.product-grid__view {\r\n  color: #777;\r\n  background: #eee;\r\n}\r\n.product-grid__view:hover {\r\n  background: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztFQUNYLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsK0dBQXdFO0VBQXhFLHdFQUF3RTtBQUMxRTtBQUNBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG4gIHdpZHRoOiA2OGVtO1xyXG59XHJcbioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuYm9keSB7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5wcm9kdWN0LWdyaWQge1xyXG4gIHdpZHRoOiA2MGVtO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xyXG59XHJcbi5wcm9kdWN0LWdyaWQucHJvZHVjdC1ncmlkLS1mbGV4Ym94IC5wcm9kdWN0LWdyaWRfX3dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5wcm9kdWN0LWdyaWQucHJvZHVjdC1ncmlkLS1mbGV4Ym94IC5wcm9kdWN0LWdyaWRfX3RpdGxlIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnByb2R1Y3QtZ3JpZC5wcm9kdWN0LWdyaWQtLWZsZXhib3ggLnByb2R1Y3QtZ3JpZF9fdGl0bGU6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fd3JhcHBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xyXG4gIG1hcmdpbi1yaWdodDogLTFyZW07XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fcHJvZHVjdC13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAzMy4zMzMzMyU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fcHJvZHVjdCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3Byb2R1Y3Q6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjZWVlO1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3Byb2R1Y3Q6aG92ZXIgLnByb2R1Y3QtZ3JpZF9fZXh0ZW5kIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4ucHJvZHVjdC1ncmlkX19pbWctd3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9faW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDAuODc1cmVtO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVlbTtcclxuICBjb2xvcjogIzIyMjtcclxuICBoZWlnaHQ6IDNlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucHJvZHVjdC1ncmlkX190aXRsZTphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAyLjRlbTtcclxuICBoZWlnaHQ6IDEuNWVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSwgd2hpdGUgNTAlKTtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19wcmljZSB7XHJcbiAgY29sb3I6ICNlOTFlNjM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2V4dGVuZC13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fZXh0ZW5kIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwYWRkaW5nOiAwIDFyZW0gMXJlbSAxcmVtO1xyXG4gIG1hcmdpbjogMC40Mzc1cmVtIC0xcmVtIDA7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNlZWU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19leHRlbmQ6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMC44NzVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTAuNDM3NXJlbTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVlbTtcclxuICBtYXJnaW4tdG9wOiAwLjQzNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxuICBwYWRkaW5nOiAwLjVlbSAwLjYyNWVtO1xyXG4gIG1hcmdpbi10b3A6IDAuODc1cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMC42MjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19idG4gaS5mYSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjMxMjVyZW07XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fYWRkLXRvLWNhcnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNlOTFlNjM7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fYWRkLXRvLWNhcnQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZTRjODM7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fdmlldyB7XHJcbiAgY29sb3I6ICM3Nzc7XHJcbiAgYmFja2dyb3VuZDogI2VlZTtcclxufVxyXG4ucHJvZHVjdC1ncmlkX192aWV3OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/product-item/product-details/product-details.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/home/product-item/product-details/product-details.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppComponentsHomeProductItemProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services/product.service */
    "./src/app/services/product.service.ts");

    let ProductDetailsComponent = class ProductDetailsComponent {
      constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.button = false;
      }

      ngOnInit() {
        this.route.paramMap.subscribe(params => {
          this._id = params.get("_id");
        });
        this.productService.getProductById(this._id).subscribe(product => {
          this.product = product;
          this.product = this.product.product;
          this.onUpdate(this.product);
          this.checkCart(this.product);
        });
        this.productsInCart = this.productService.getProductsInCart();

        if (this.productsInCart == null) {
          this.cartItemCount = 0;
        } else {
          this.cartItemCount = this.productsInCart.length;
        }

        this.productService.updateCartCount(this.cartItemCount);
      }

      onUpdate(product) {
        this._id = product._id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.image = product.image;
      }

      onAddToCart() {
        this.productsInCart = this.productService.getProductsInCart();

        if (this.productsInCart == null) {
          this.productsInCart = [];
          this.productsInCart.push(this.product);
          this.productService.addToCart(this.productsInCart); // TODO show success message
        } else {
          let tempProduct = this.productsInCart.find(p => p._id == this._id);

          if (tempProduct == null) {
            this.productsInCart.push(this.product);
            this.productService.addToCart(this.productsInCart); // TODO show success message
          }
        }

        this.cartItemCount = this.productsInCart.length;
        this.productService.updateCartCount(this.cartItemCount);
        this.button = true;
      }

      onRemoveFromCart() {
        this.productService.removeFromCart(this.product);
        this.productsInCart = this.productService.getProductsInCart();
        this.cartItemCount = this.productsInCart.length;
        this.productService.updateCartCount(this.cartItemCount);
        this.button = false;
      }

      checkCart(product) {
        this.productsInCart = this.productService.getProductsInCart();

        if (this.productsInCart == null) {
          this.button = false;
          return;
        } else if (this.productsInCart[0] == null) {
          this.button = false;
        } else {
          this.productsInCart.map(cart => {
            if (cart._id == product._id) {
              this.button = true;
            }
          });
        }
      }

    };

    ProductDetailsComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "product-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/product-item/product-details/product-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.component.css */
      "./src/app/components/home/product-item/product-details/product-details.component.css")).default]
    })], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/components/home/product-item/product-item.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/components/home/product-item/product-item.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeProductItemProductItemComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\r\n  width: 68em;\r\n}\r\n* {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  color: #777;\r\n  font-family: \"Open Sans\", Arial, sans-serif;\r\n}\r\n.product-grid {\r\n  width: 60em;\r\n  margin: 2rem auto;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__wrapper {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__title {\r\n  height: auto;\r\n}\r\n.product-grid.product-grid--flexbox .product-grid__title:after {\r\n  display: none;\r\n}\r\n.product-grid__wrapper {\r\n  margin-left: -1rem;\r\n  margin-right: -1rem;\r\n}\r\n.product-grid__product-wrapper {\r\n  padding: 1rem;\r\n  float: left;\r\n  width: 33.33333%;\r\n}\r\n.product-grid__product {\r\n  padding: 1rem;\r\n  position: relative;\r\n  cursor: pointer;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n}\r\n.product-grid__product:hover {\r\n  box-shadow: 0px 0px 0px 1px #eee;\r\n  z-index: 50;\r\n}\r\n.product-grid__product:hover .product-grid__extend {\r\n  display: block;\r\n}\r\n.product-grid__img-wrapper {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  height: 150px;\r\n}\r\n.product-grid__img {\r\n  max-width: 100%;\r\n  height: auto;\r\n  max-height: 100%;\r\n}\r\n.product-grid__title {\r\n  margin-top: 0.875rem;\r\n  display: block;\r\n  font-size: 1.125em;\r\n  color: #222;\r\n  height: 3em;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n.product-grid__title:after {\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 2.4em;\r\n  height: 1.5em;\r\n  background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(50%, white));\r\n  background: linear-gradient(to right, rgba(255, 255, 255, 0), white 50%);\r\n}\r\n.product-grid__price {\r\n  color: #e91e63;\r\n  font-weight: bold;\r\n  letter-spacing: 0.4px;\r\n}\r\n.product-grid__extend-wrapper {\r\n  position: relative;\r\n}\r\n.product-grid__extend {\r\n  display: none;\r\n  position: absolute;\r\n  padding: 0 1rem 1rem 1rem;\r\n  margin: 0.4375rem -1rem 0;\r\n  box-shadow: 0px 0px 0px 1px #eee;\r\n  background: #fff;\r\n  border-radius: 0 0 4px 4px;\r\n}\r\n.product-grid__extend:before {\r\n  content: \"\";\r\n  height: 0.875rem;\r\n  width: 100%;\r\n  position: absolute;\r\n  top: -0.4375rem;\r\n  left: 0;\r\n  background: #fff;\r\n}\r\n.product-grid__description {\r\n  font-size: 0.875em;\r\n  margin-top: 0.4375rem;\r\n  margin-bottom: 0;\r\n}\r\n.product-grid__btn {\r\n  display: inline-block;\r\n  font-size: 0.875em;\r\n  color: #777;\r\n  background: #eee;\r\n  padding: 0.5em 0.625em;\r\n  margin-top: 0.875rem;\r\n  margin-right: 0.625rem;\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n}\r\n.product-grid__btn i.fa {\r\n  margin-right: 0.3125rem;\r\n}\r\n.product-grid__add-to-cart {\r\n  color: #fff;\r\n  background: #e91e63;\r\n}\r\n.product-grid__add-to-cart:hover {\r\n  background: #ee4c83;\r\n}\r\n.product-grid__view {\r\n  color: #777;\r\n  background: #eee;\r\n}\r\n.product-grid__view:hover {\r\n  background: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7RUFDYiwrR0FBd0U7RUFBeEUsd0VBQXdFO0FBQzFFO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsT0FBTztFQUNQLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuICB3aWR0aDogNjhlbTtcclxufVxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbmJvZHkge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG4ucHJvZHVjdC1ncmlkIHtcclxuICB3aWR0aDogNjBlbTtcclxuICBtYXJnaW46IDJyZW0gYXV0bztcclxufVxyXG4ucHJvZHVjdC1ncmlkLnByb2R1Y3QtZ3JpZC0tZmxleGJveCAucHJvZHVjdC1ncmlkX193cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4ucHJvZHVjdC1ncmlkLnByb2R1Y3QtZ3JpZC0tZmxleGJveCAucHJvZHVjdC1ncmlkX190aXRsZSB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5wcm9kdWN0LWdyaWQucHJvZHVjdC1ncmlkLS1mbGV4Ym94IC5wcm9kdWN0LWdyaWRfX3RpdGxlOmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3dyYXBwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3Byb2R1Y3Qtd3JhcHBlciB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMzMuMzMzMzMlO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3Byb2R1Y3Qge1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19wcm9kdWN0OmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2VlZTtcclxuICB6LWluZGV4OiA1MDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19wcm9kdWN0OmhvdmVyIC5wcm9kdWN0LWdyaWRfX2V4dGVuZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9faW1nLXdyYXBwZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2ltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3RpdGxlIHtcclxuICBtYXJnaW4tdG9wOiAwLjg3NXJlbTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEuMTI1ZW07XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgaGVpZ2h0OiAzZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fdGl0bGU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMi40ZW07XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCksIHdoaXRlIDUwJSk7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fcHJpY2Uge1xyXG4gIGNvbG9yOiAjZTkxZTYzO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxufVxyXG4ucHJvZHVjdC1ncmlkX19leHRlbmQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2V4dGVuZCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcGFkZGluZzogMCAxcmVtIDFyZW0gMXJlbTtcclxuICBtYXJnaW46IDAuNDM3NXJlbSAtMXJlbSAwO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjZWVlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fZXh0ZW5kOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDAuODc1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0wLjQzNzVyZW07XHJcbiAgbGVmdDogMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2Rlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgbWFyZ2luLXRvcDogMC40Mzc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgcGFkZGluZzogMC41ZW0gMC42MjVlbTtcclxuICBtYXJnaW4tdG9wOiAwLjg3NXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fYnRuIGkuZmEge1xyXG4gIG1hcmdpbi1yaWdodDogMC4zMTI1cmVtO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2FkZC10by1jYXJ0IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAjZTkxZTYzO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX2FkZC10by1jYXJ0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZWU0YzgzO1xyXG59XHJcbi5wcm9kdWN0LWdyaWRfX3ZpZXcge1xyXG4gIGNvbG9yOiAjNzc3O1xyXG4gIGJhY2tncm91bmQ6ICNlZWU7XHJcbn1cclxuLnByb2R1Y3QtZ3JpZF9fdmlldzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/home/product-item/product-item.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/home/product-item/product-item.component.ts ***!
    \************************************************************************/

  /*! exports provided: ProductItemComponent */

  /***/
  function srcAppComponentsHomeProductItemProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
      return ProductItemComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/product.service */
    "./src/app/services/product.service.ts");

    let ProductItemComponent = class ProductItemComponent {
      constructor(productService, router) {
        this.productService = productService;
        this.router = router;
        this.button = false;
        this.addtocart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        this.productsInCart = this.productService.getProductsInCart();

        if (this.productsInCart == null) {
          this.cartItemCount = 0;
        } else {
          this.cartItemCount = this.productsInCart.length;
        }

        this.checkCart(this.product);
        this.productService.updateCartCount(this.cartItemCount);
      }

      onAddToCart(productFromView) {
        this.productsInCart = this.productService.getProductsInCart();

        if (this.productsInCart == null) {
          this.productsInCart = [];
          this.productsInCart.push(productFromView);
          this.productService.addToCart(this.productsInCart); // TODO show success message
        } else {
          let tempProduct = this.productsInCart.find(p => p._id == this.product._id);

          if (tempProduct == null) {
            this.productsInCart.push(productFromView);
            this.productService.addToCart(this.productsInCart); // TODO show success message
          }
        }

        this.cartItemCount = this.productsInCart.length;
        this.productService.updateCartCount(this.cartItemCount);
        this.button = true;
      }

      onRemoveFromCart(product) {
        this.productService.removeFromCart(product);
        this.productsInCart = this.productService.getProductsInCart();
        this.cartItemCount = this.productsInCart.length;
        this.productService.updateCartCount(this.cartItemCount);
        this.button = false;
      }

      onProductUpdate() {
        this.router.navigate(["/update", this.product._id]);
      }

      checkCart(product) {
        this.productsInCart = this.productService.getProductsInCart();

        if (this.productsInCart == null) {
          this.button = false;
        } else if (this.productsInCart[0] == null) {
          this.button = false;
        } else {
          this.productsInCart.map(cart => {
            if (cart._id == product._id) {
              this.button = true;
            }
          });
        }
      }

    };

    ProductItemComponent.ctorParameters = () => [{
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ProductItemComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ProductItemComponent.prototype, "addtocart", void 0);
    ProductItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "product-item",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-item.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/product-item/product-item.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-item.component.css */
      "./src/app/components/home/product-item/product-item.component.css")).default]
    })], ProductItemComponent);
    /***/
  },

  /***/
  "./src/app/components/login/login.component.css":
  /*!******************************************************!*\
    !*** ./src/app/components/login/login.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);

    let LoginComponent = class LoginComponent {
      constructor(authService, router, flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
      }

      ngOnInit() {} // TODO forgot password functionality with nodemailer


      onLoginSubmit() {
        const user = {
          username: this.username,
          password: this.password
        }; // gonna return an observable so we want to subscribe

        this.authService.authenticateUser(user).subscribe(data => {
          if (data.success) {
            this.authService.storeUserData(data.token, data.user);
            this.flashMessagesService.show("You are now logged in congrats", {
              cssClass: "alert-success",
              timeout: 5000
            });
            this.router.navigate(["dashboard"]);
          } else {
            this.flashMessagesService.show(data.msg, {
              cssClass: "alert-danger",
              timeout: 5000
            });
            this.router.navigate(["login"]);
          }
        });
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNavbarNavbarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/product.service */
    "./src/app/services/product.service.ts");

    let NavbarComponent = class NavbarComponent {
      constructor(authService, router, flashMessagesService, productService) {
        this.authService = authService;
        this.router = router;
        this.flashMessagesService = flashMessagesService;
        this.productService = productService;
      }

      ngOnInit() {
        this.productService.currentMessage.subscribe(msg => this.cartItemCount = msg);
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

    };

    NavbarComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]
    }, {
      type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
    }];

    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-navbar",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./navbar.component.css */
      "./src/app/components/navbar/navbar.component.css")).default]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/profile/profile.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ProfileComponent = class ProfileComponent {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }

      ngOnInit() {
        this.authService.getProfile().subscribe(profile => {
          this.user = profile.user;
        }, err => {
          console.log(err);
          return false;
        });
      }

    };

    ProfileComponent.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/components/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/register/register.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/register/register.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsRegisterRegisterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/register/register.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/register/register.component.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular2-flash-messages */
    "./node_modules/angular2-flash-messages/module/index.js");
    /* harmony import */


    var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/validate.service */
    "./src/app/services/validate.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let RegisterComponent = class RegisterComponent {
      constructor(validateService, flashMessagesService, authService, router) {
        this.validateService = validateService;
        this.flashMessagesService = flashMessagesService;
        this.authService = authService;
        this.router = router;
      }

      ngOnInit() {}

      onRegisterSubmit() {
        const user = {
          name: this.name,
          email: this.email,
          username: this.username,
          password: this.password
        }; // required fields

        if (!this.validateService.validateRegister(user)) {
          this.flashMessagesService.show("Please fill in all fields idiot", {
            cssClass: "alert-danger",
            timeout: 3000
          });
          return false;
        } // validate email


        if (!this.validateService.validateEmail(user.email)) {
          this.flashMessagesService.show("Please use valid email idiot", {
            cssClass: "alert-danger",
            timeout: 3000
          });
          return false;
        } // may have to implement functionality to check if username/email already exists
        // Register User
        // since its an observable, we need to subscribe to it


        this.authService.registerUser(user).subscribe(data => {
          if (data.success) {
            this.flashMessagesService.show("Congratulations you have won 10000000 dollars you are our 1000000 registered user", {
              cssClass: "alert-success",
              timeout: 3000
            });
            this.router.navigate(["/login"]);
          } else {
            this.flashMessagesService.show("Congratulations you idiot somethine went wrong", {
              cssClass: "alert-danger",
              timeout: 3000
            });
            this.router.navigate(["/login"]);
          }
        });
      }

    };

    RegisterComponent.ctorParameters = () => [{
      type: _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"]
    }, {
      type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]
    }, {
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-register",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./register.component.css */
      "./src/app/components/register/register.component.css")).default]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/guards/admin.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/admin.guard.ts ***!
    \***************************************/

  /*! exports provided: AdminGuard */

  /***/
  function srcAppGuardsAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
      return AdminGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let AdminGuard = class AdminGuard {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      } // checking for admin


      canActivate() {
        if (this.authService.getAdmin()) {
          return true;
        } else {
          this.router.navigate(["/"]);
          return false;
        }
      }

    };

    AdminGuard.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AdminGuard);
    /***/
  },

  /***/
  "./src/app/guards/auth.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/auth.guard.ts ***!
    \**************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    let AuthGuard = class AuthGuard {
      constructor(authService, router) {
        this.authService = authService;
        this.router = router;
      }

      canActivate() {
        if (this.authService.loggedIn()) {
          return true;
        } else {
          this.router.navigate(["/login"]);
          return false;
        }
      }

    };

    AuthGuard.ctorParameters = () => [{
      type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");

    let AuthService = class AuthService {
      constructor(http) {
        this.http = http;
      }

      registerUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Content-Type", "application/json");
        return this.http.post("users/register", user, {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
      }

      authenticateUser(user) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Content-Type", "application/json");
        return this.http.post("users/authenticate", user, {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
      }

      getProfile() {
        this.loadToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
          "Content-Type": "application/json",
          Authorization: this.authToken
        });
        return this.http.get("users/profile", {
          headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
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
        const loggedIn = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();

        if (this.authToken == null) {
          return false;
        } else {
          return !loggedIn.isTokenExpired(this.authToken);
        }
      }

      getAdmin() {
        const localsession = JSON.parse(localStorage.getItem("user"));

        if (localsession == null) {
          return false;
        }

        const result = localsession.type;
        return result;
      }

      logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
      }

    };

    AuthService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/product.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/product.service.ts ***!
    \*********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let ProductService = class ProductService {
      constructor(http) {
        this.http = http;
        this.currentCartCount = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this.currentMessage = this.currentCartCount.asObservable();
      }

      getProducts(filter) {
        const getOptions = {
          params: {
            filter: filter
          }
        }; // the http get method returns an observable of http responses
        // we need to unwrap the http response objects that the http
        // get method sends back because we still want the service to
        // return products not an http reposne object that the component
        // has to deal with. To do this, we can use the rxjs operator
        // called map
        // map method expects a function as its argument, this function
        // will receive an argument that will be one of the http response
        // objects in the observable

        return this.http.get("products/dashboard", getOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
      } // add product


      addProduct(product) {
        return this.http.post("products/dashboard", product);
      } // delete product


      deleteProduct(product) {
        return this.http.delete("products/dashboard/".concat(product._id));
      } // update product


      updateProduct(product) {
        return this.http.put("products/dashboard/".concat(product._id), product);
      } // retrieve by id


      getProductById(_id) {
        return this.http.get("products/dashboard/".concat(_id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res));
      } // add to cart


      addToCart(product) {
        localStorage.setItem("products", JSON.stringify(product));
      } // get products in cart


      getProductsInCart() {
        var result = JSON.parse(localStorage.getItem("products"));

        if (result == null) {
          var nullArray = [];
          return nullArray;
        }

        return JSON.parse(localStorage.getItem("products"));
      }

      removeAllFromCart() {
        return localStorage.removeItem("products");
      }

      updateCartCount(count) {
        this.currentCartCount.next(count);
      }

      removeFromCart(product) {
        var cart = localStorage.getItem("products");
        var jsonObj = eval(cart);
        jsonObj.forEach(function (result, index) {
          if (result._id == product._id) {
            jsonObj.splice(index, 1);
          }
        });
        localStorage.setItem("products", JSON.stringify(jsonObj));
      }

      toggleAddToCartButton(value) {
        if (value == false) {
          return true;
        } else {
          return false;
        }
      }

    };

    ProductService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/services/validate.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/validate.service.ts ***!
    \**********************************************/

  /*! exports provided: ValidateService */

  /***/
  function srcAppServicesValidateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidateService", function () {
      return ValidateService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let ValidateService = class ValidateService {
      constructor() {}

      validateRegister(user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
          return false;
        } else {
          return true;
        }
      }

      validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }

    };
    ValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ValidateService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\chendric\Desktop\BULLDOG_STACK\angular-src\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map