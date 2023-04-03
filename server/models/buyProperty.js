const mongoose = require("mongoose");

const buyPropertySchema = new mongoose.Schema(
  {
    p_id: Number, // property id
    link: String,
    name: String,
    location: String,
    propertyType: String,
    rooms: String,
    priceRange: String,
    areaRange: String,
    areaType: String,
    avgCostNumeric: Number,
    areaNumeric: Number,
    basePrice: String,
    descr: String,
    status: String,
    possession: String,
    lattitude: Number,
    longitude: Number,
  },
  {
    strict: true,
  }
);

const BuyPropertySchema = mongoose.model("Buy Property", buyPropertySchema);
module.exports = BuyPropertySchema;
