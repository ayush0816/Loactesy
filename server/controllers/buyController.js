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
  } catch (err) {
    return res.status(500).json({ error: err });
  }
  return res.status(200).json({ property: Property, success: "success" });
};

const buyProperty = async (req, res) => {
  try {
  } catch (error) {}

  let property = await BuyPropertyModel.findById(req.body.id);
  if (!property) return res.status(400).send("Property not found");
  let prop = { ...property };
  const currentOwner = prop.owner;
  prop.owner = req.user;
  property = await BuyPropertyModel.findByIdAndUpdate(
    req.body.id,
    {
      $set: prop,
    },
    {
      new: true,
    }
  );

  res.send(property);
};

module.exports = { getAvailableProperties, buyProperty };
