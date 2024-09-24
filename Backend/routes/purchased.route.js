const express = require("express");
const auth = require("../middlewares/auth.middleware");
const {
  postPurchase,
  getPurchasedProducts,
} = require("../controllers/product.controller");

const purchaseRouter = express.Router();

purchaseRouter.post("/purchased", auth, postPurchase);
purchaseRouter.get("/purchased", auth, getPurchasedProducts);

module.exports = purchaseRouter;
