const RentPropertyModel = require("../models/rentProperty");
const UserModel = require("../models/user");

const getAvailableProperties = async (req, res) => {
  let obj = {};
  if (req.query.name) obj.name = req.query.name;
  if (req.query.location) obj.location = req.query.location;
  if (req.query.rooms) obj.rooms = req.query.rooms;
  obj.status = true;
  try {
    const Property = await RentPropertyModel.find(obj);
    return res.status(200).json({ property: Property, success: "success" });
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

const rentProperty = async (req, res) => {
  try {
    await RentPropertyModel.updateMany(
      { _id: req.body.id },
      { renter: req.user ,status: false}
    );
    let user = await UserModel.findById(req.user);
    let arr = user.rentproperty;
    //console.log(arr);
    arr.push(req.body.id);
    await UserModel.updateMany({ _id: req.user }, { rentproperty: arr });
    res.status(200).json({ status: "Property Renting Success" });
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

module.exports = { getAvailableProperties, rentProperty };
