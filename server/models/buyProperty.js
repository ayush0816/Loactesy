const mongoose = require("mongoose");

const buyPropertySchema = new mongoose.Schema(
  {
    link: String,
    name: String,
    location: String,
    address:{type : String, require: true},
    rooms: Number,
    price: Number,
    owner: {
      type : mongoose.Types.ObjectId,
      ref : 'User'
    },
    description: String,
    status: Boolean,
  }
);

const BuyPropertyModel = mongoose.model("Buy Property", buyPropertySchema);
module.exports = BuyPropertyModel;
