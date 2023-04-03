const mongoose=require('mongoose');
const sellSchema = new mongoose.Schema({
    p_id: Number,
    userId: String,
    category: String // rent or direct sold
  },{
    strict: true,
  });

const SellModel = mongoose.model("Sell", sellSchema);
module.exports=SellModel;