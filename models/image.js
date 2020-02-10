var mongoose = require("mongoose");

var imageSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    required: true
  },
  path: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Image", imageSchema);
