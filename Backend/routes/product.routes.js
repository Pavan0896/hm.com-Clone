const express = require("express");
const {
  postProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const auth = require("../middlewares/auth.middleware");

const prodRouter = express.Router();

prodRouter.post("/products", auth, postProduct);

prodRouter.get("/products", getProduct);

prodRouter.patch("/updateProducts/:_id", auth, updateProduct);

prodRouter.delete("/deleteProducts/:_id", auth, deleteProduct);

module.exports = prodRouter;
