const mongoose = require("mongoose");
const rentPropertySchema = new mongoose.Schema({
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
  renter: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  description: String,
  status: String,
});

const RentPropertyModel = mongoose.model("Rent Property", rentPropertySchema);
module.exports = RentPropertyModel;
