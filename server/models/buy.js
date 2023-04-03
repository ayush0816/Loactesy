const mongoose = require("mongoose");
const buySchema = new mongoose.Schema(
  {
    p_id: Number,
    userId: String,
    category: String,
  },
  {
    strict: true,
  }
);

const BuyModel = mongoose.model("Buy", buySchema);
module.exports = BuyModel;
