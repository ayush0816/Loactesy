const mongoose=require('mongoose');
const rentedPropertySchema = new mongoose.Schema({
    
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
  },{
    strict: true,
  });
  
const RentedPropertyModel = mongoose.model("Rented Property", rentedPropertySchema);
module.exports=RentedPropertyModel;