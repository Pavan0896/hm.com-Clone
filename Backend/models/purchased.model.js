const mongoose = require("mongoose");

const purchasedSchema = mongoose.Schema(
  {
    user_id: { type: String, require: true },
    ids: { type: Array, require: true },
  },
  {
    versionKey: false,
  }
);

const PurchaseModel = mongoose.model("purchase", purchasedSchema);

module.exports = PurchaseModel;
