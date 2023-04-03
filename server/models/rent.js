const mongoose = require("mongoose");

const rentPropertySchema = new mongoose.Schema({
 
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
});

const RentPropertySchema = mongoose.model("Rent Property", rentPropertySchema);
module.exports = RentPropertySchema;
