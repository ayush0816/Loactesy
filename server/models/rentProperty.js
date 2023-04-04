const mongoose = require("mongoose");
const rentPropertySchema = new mongoose.Schema(
  {
    link: String,
    name: String,
    location: String,
    rooms: Number,
    price: Number,
    owner:{ 
    type : mongoose.Types.ObjectId,
    ref : 'User'
    },
    renter:{
    type : mongoose.Types.ObjectId,
    ref : 'User'
  },
    description: String,
    status: String,
  }
);

const RentPropertyModel = mongoose.model("Rent Property", rentPropertySchema);
module.exports = RentPropertyModel;
