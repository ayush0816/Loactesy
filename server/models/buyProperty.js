const mongoose = require("mongoose");

const buyPropertySchema = new mongoose.Schema(
  {
    link: String,
    name: String,
    location: String,
    rooms: String,
    price: String,
    owner: String,
    description: String,
    status: String,
  },
  {
    strict: true,
  }
);

const BuyPropertyModel = mongoose.model("Buy Property", buyPropertySchema);
module.exports = BuyPropertyModel;
