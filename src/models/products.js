const { Schema, model, models } = require("mongoose");

const productSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    quantity: Number,
  },
  { timestamps: true }
);

const Product = models.Product || model("Product", productSchema);

export default Product;
