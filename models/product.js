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

module.exports.getProductCount = function(callback) {
  Product.count(callback);
}

module.exports.getAllProducts = function(pagenumber, callback) {
  var skipValue = (options.pagenumber - 1) * 20;
  Product.find({}).skip( skipValue )
  .limit(20).exec(callback);
};

module.exports.getAllProductsFiltered = function(options, callback) {
  var skipValue = (options.pagenumber - 1) * 20;
  if (options.filter == "priceAsc") {
    Product.find({})
      .sort({ price: 1 })
      .skip( skipValue )
      .limit(20)
      .exec(callback);
  } else if (options.filter == "priceDesc") {
    Product.find({})
      .sort({ price: -1 })
      .skip( skipValue )
      .limit(20)
      .exec(callback);
  } else if (options.filter == "nameAsc") {
    Product.find({})
      .sort({ name: 1 })
      .skip( skipValue )
      .limit(20)
      .exec(callback);
  } else if (options.filter == "nameDesc") {
    Product.find({})
      .sort({ name: -1 })
      .skip( skipValue )
      .limit(20)
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
