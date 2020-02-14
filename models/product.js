const mongoose = require("mongoose");
const config = require("../config/database");

// Product Schema
const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Product = (module.exports = mongoose.model("Product", ProductSchema));

module.exports.getAllProducts = function(callback) {
  Product.find(callback);
};

module.exports.getAllProductsFiltered = function(filter, callback) {
  if (filter == "priceAsc") {
    Product.find({})
      .sort({ price: 1 })
      .exec(callback);
  } else if (filter == "priceDesc") {
    Product.find({})
      .sort({ price: -1 })
      .exec(callback);
  } else if (filter == "nameAsc") {
    Product.find({})
      .sort({ name: 1 })
      .exec(callback);
  } else if (filter == "nameDesc") {
    Product.find({})
      .sort({ name: -1 })
      .exec(callback);
  } else {
    Product.find(callback);
  }
};

module.exports.getProductById = function(_id, callback) {
  Product.findById(_id, callback);
};

module.exports.getProductByName = function(name, callback) {
  const query = { name: name };
  Product.findOne(query, callback);
};

module.exports.addProduct = function(newProduct, callback) {
  // TODO allow capabilty of multiple images
  Product.create(newProduct, callback);
};

module.exports.deleteProduct = function(_id, callback) {
  Product.findByIdAndDelete(_id, callback);
};

module.exports.updateProduct = function(_id, product, callback) {
  Product.findByIdAndUpdate(_id, product, callback);
};
