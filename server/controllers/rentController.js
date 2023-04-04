const RentPropertyModel = require("../models/rentProperty");
const UserModel = require("../models/user");

const getAvailableProperties = async (req, res) => {
  let obj = {};
  if (req.query.name) obj.name = req.query.name;
  if (req.query.location) obj.location = req.query.location;
  if (req.query.rooms) obj.rooms = req.query.rooms;
  obj.status = true;
  try {
    const Property = await rentPropertyModel.find(obj);
    return res.status(200).json({ property: Property, success: "success" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const rentProperty = async (req, res) => {
  try {
        await RentPropertyModel.updateMany({_id:req.body.id},{renter : req.user});
        let arr=UserModel.findById(req.user).rentProperty;
        arr.push(req.body.id);
        await UserModel.updateMany({_id:req.user},{rentProperty:arr});
    res.status(200).json({ status: "Property Purchase Success" });
  } 
  catch (err) {
    return res.status(500).json({ error: err });
  }
 
};

module.exports = { getAvailableProperties, rentProperty };