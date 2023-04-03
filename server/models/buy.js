const mongoose = require("mongoose");
const buySchema = new mongoose.Schema(
  {
   
    userId: String,
    category: String,
  },
  {
    strict: true,
  }
);

const BuyModel = mongoose.model("Buy", buySchema);
module.exports = BuyModel;
