const BuyPropertyModel = require("../models/buyProperty");
const UserModel = require("../models/user");

const getAvailableProperties = async (req, res) => {
  let obj = {};
  if (req.query.name) obj.name = req.query.name;
  if (req.query.location) obj.location = req.query.location;
  if (req.query.rooms) obj.rooms = req.query.rooms;
  obj.status = true;
  try {
    const Property = await BuyPropertyModel.find(obj);
    return res.status(200).json({ property: Property, success: "success" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
  
};

const buyProperty = async (req, res) => {
  try {
    let property = await BuyPropertyModel.findById(req.body.id);
    const currentOwner = property.owner;
    console.log(currentOwner);
    await BuyPropertyModel.updateMany({_id:req.body.id},{owner:req.user,status:false});
    let user = await UserModel.findById(currentOwner);
    console.log(user);
    let arr = user.buyProperty;
    console.log(arr);
    let idx = arr.indexOf(req.body.id);
    arr.splice(idx, 1);
    user.buyProperty = arr;
    console.log(arr);
    await UserModel.updateMany({ _id: currentOwner }, { buyProperty: arr });
    user = await UserModel.findById(req.user);
    arr = user.buyProperty;
    arr.push(req.body.id);
    await UserModel.updateMany({ _id: req.user }, { buyProperty: arr });
    res.status(200).json({ status: "Property Purchase Success" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
 
};

module.exports = { getAvailableProperties, buyProperty };