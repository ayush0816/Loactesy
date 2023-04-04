const mongoose = require("mongoose");

const buyPropertySchema = new mongoose.Schema({
  link: String,
  name: { type: String, require: true },
  location: { type: String, require: true },
  address: { type: String, require: true },
  rooms: { type: Number, require: true },
  price: { type: Number, require: true },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  description: String,
  status: Boolean,
});

const BuyPropertyModel = mongoose.model("Buy Property", buyPropertySchema);
module.exports = BuyPropertyModel;
