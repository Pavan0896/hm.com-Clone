const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    image1: { type: String, require: true },
    image2: { type: String, require: true },
    category: { type: String, require: true },
    related_to: { type: String, require: true },
    rating: { type: Number, require: true },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", productSchema);

module.exports = { ProductModel };
