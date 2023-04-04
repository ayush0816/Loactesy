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
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

const buyNewProperty = async (req, res) => {
  try {
    let property = await BuyPropertyModel.findById(req.body.id);
    if (!property) return res.status(400).send("Property not found");

    const currentOwner = property.owner.toString();

    await BuyPropertyModel.updateMany(
      { _id: req.body.id },
      { owner: req.user, status: false }
    );
    let user = await UserModel.findById(currentOwner);

    let arr = user.buyproperty;
    console.log(arr);
    let idx = arr.indexOf(req.body.id);
    arr.splice(idx, 1);
    await UserModel.updateMany({ _id: currentOwner }, { buyproperty: arr });
    user = await UserModel.findById(req.user);
    arr = user.buyproperty;
    arr.push(req.body.id);
    await UserModel.updateMany({ _id: req.user }, { buyproperty: arr });
    res.status(200).json({ status: "Property Purchase Success" });
  } catch (err) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

module.exports = { getAvailableProperties, buyNewProperty };
