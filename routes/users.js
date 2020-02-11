const express = require("express");
const router = express.Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const aws = require("aws-sdk");
const multerS3 = require("multer-s3");

const config = require("../config/database");
const User = require("../models/user");
const Product = require("../models/product");

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
      console.log(file);
      callback(null, Date.now() + file.originalname);
    },
    limits: {
      fileSize: 1024 * 1024 * 4
    },
    fileFilter: fileFilter
  })
});

// LOCAL CONFIG
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

// Register
router.post("/register", (req, res, next) => {
  var status = false;

  // implment non-duplicate users
  User.getUserByUsername(req.body.username, (err, user) => {
    if (err) {
      throw err;
    }
    if (user != null) {
      res.json({ success: false, msg: "sorry that username is taken" });
    }
  });

  console.log(req.body.username);
  // this is the "magic line"
  if (req.body.username == "manager") {
    status = true;
  }
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    type: status
  });

  User.addUser(newUser, (err, user) => {
    if (err) {
      res.json({ success: false, msg: "failed to register user" });
    } else {
      res.json({ success: true, msg: "user registered" });
    }
  });
});

// Authenticate
router.post("/authenticate", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if (err) {
      throw err;
    }
    if (!user) {
      return res.json({ success: false, msg: "User not found" });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) {
        throw err;
      }
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          // one week in seconds
          expiresIn: 604800
        });

        res.json({
          success: true,
          token: "Bearer " + token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            type: user.type
          }
        });
      } else {
        return res.json({ success: false, msg: "Wrong Password" });
      }
    });
  });
});

// Profile
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({ user: req.user });
  }
);

// CREATE PRODUCT
router.post("/dashboard", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  let newProduct = new Product({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    image: req.file.path
  });

  Product.addProduct(newProduct, (err, product) => {
    if (err) {
      res.json({ success: false, msg: `the message is... ${req}` });
    } else {
      res.json({ product: product });
    }
  });
});

// GET ALL PRODUCTS
router.get("/dashboard", (req, res, next) => {
  Product.getAllProducts((err, products) => {
    if (err) {
      res.json({ success: false, msg: "failed to create product" });
    } else {
      res.json({ products: products });
      //res.json({ success: true, msg: "product created" });
    }
  });
});

// GET PRODUCT BY ID
router.get("/dashboard/:_id", (req, res, next) => {
  Product.getProductById(req.params._id, (err, product) => {
    if (err) {
      res.json({ success: false, msg: "failed to get product" });
    } else {
      res.json({ product: product });
      //res.json({ success: true, msg: "product created" });
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

// UPDATE IMAGE BY ID

module.exports = router;
