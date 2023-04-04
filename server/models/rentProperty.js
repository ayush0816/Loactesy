const mongoose = require("mongoose");
const rentPropertySchema = new mongoose.Schema(
  {
    link: String,
    name: String,
    location: String,
    rooms: String,
    priceRange: String,
    owner: String,
    description: String,
    status: String,
  },
  {
    strict: true,
  }
);

const RentPropertyModel = mongoose.model("Rent Property", rentPropertySchema);
module.exports = RentPropertyModel;
