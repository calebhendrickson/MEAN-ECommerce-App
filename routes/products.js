const express = require("express");
const router = express.Router();
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const config = require("../config/database");
const Product = require("../models/product");

// Production
var URL = "https://s3-us-east-2.amazonaws.com/flybuy-bulldog/";
//https://flybuy-bulldog.s3.us-east-2.amazonaws.com/
// Development
//var URL = "https://localhost:3000/";

// TODO make these environment variables
aws.config.update({
  secretAccessKey: "uTdVzJhwCenWXMsG12MeHc0V1vGIcwXPk0WrMh29",
  accesskeyId: "AKIAIBQBSZ2BSIF2DO3A",
  region: "us-east-2"
});

var s3 = new aws.S3();

const fileFilter = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || "image/png") {
    callback(null, true);
  } else {
    callback(new Error("file type not supported"), false);
  }
};

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "flybuy-bulldog",
    key: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    },
    acl: "public-read",
    limits: {
      fileSize: 1024 * 1024 * 4
    },
    fileFilter: fileFilter
  })
});

// Multer LOCAL CONFIG
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "./uploads");
//   },
//   filename: (req, file, callback) => {
//     callback(null, Date.now() + file.originalname);
//   }
// });

// const fileFilter = (req, file, callback) => {
//   if (file.mimetype === "image/jpeg" || "image/png") {
//     callback(null, true);
//   } else {
//     callback(new Error("file type not supported"), false);
//   }
// };

// var upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5
//   },
//   fileFilter: fileFilter
// });

// CREATE PRODUCT
// Create capability to upload multiple images
router.post("/dashboard", upload.single("file"), (req, res, next) => {
  var imageURL = URL + req.file.key;

  let newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: imageURL
  });

  Product.addProduct(newProduct, (err, product) => {
    if (err) {
      res.json({ success: false, msg: imageURL });
    } else {
      res.json({ product: product, msg: imageURL });
    }
  });
});

// GET ALL PRODUCTS
router.get("/dashboard", (req, res, next) => {
  console.log(req.query.filter);
  console.log(req.query.pagenumber);
  var options = {
    filter: req.query.filter,
    pagenumber: req.query.pagenumber
  }

  console.log(options);
  if (req.query.filter != null) {
    Product.getAllProductsFiltered(options, (err, products) => {
      if (err) {
        res.json({
          success: false,
          msg: `The value of ${req.query.filter} didnt work`
        });
      } else {
        res.json({ products: products });
      }
    });
  } else {
    Product.getAllProducts(req.query.pagenumber, (err, products) => {
      if (err) {
        res.json({ success: false, msg: "failed to create product" });
      } else {
        res.json({ products: products });
      }
    });
  }
});

// GET PRODUCT BY ID
router.get("/dashboard/:_id", (req, res, next) => {
  Product.getProductById(req.params._id, (err, product) => {
    if (err) {
      res.json({ success: false, msg: "failed to get product" });
    } else {
      res.json({ product: product });
    }
  });
});

// DELETE PRODUCT BY ID
router.delete("/dashboard/:_id", (req, res, next) => {
  Product.deleteProduct(req.params._id, err => {
    if (err) {
      res.json({ success: false, msg: "failed to delete product" });
    } else {
      res.json({ success: true, msg: "product deleted" });
    }
  });
});

// UPDATE PRODUCT BY ID
// TODO Include image updating functionality
router.put("/dashboard/:_id", (req, res, next) => {
  let newProduct = new Product({
    _id: req.body._id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image
  });
  Product.updateProduct(req.params._id, newProduct, err => {
    if (err) {
      res.json({ success: false, msg: "failed to update product" });
    } else {
      res.json({ success: true, msg: "product updated" });
    }
  });
});

module.exports = router;
