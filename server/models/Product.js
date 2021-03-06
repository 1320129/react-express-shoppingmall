const Schema = require("mongoose");
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    maxlength: 50,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  images: {
    type: Array,
    default: [],
  },
  continents: {
    type: Number,
    default: 1,
  },
  sold: {
    type: Number,
    maxlength: 100,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);

productSchema.index(
  {
    title: "text",
    description: "text",
  },
  {
    weights: {
      title: 10,
      description: 1,
    },
  }
);
module.exports = { Product };
