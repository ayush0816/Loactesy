const RentPropertyModel = require("../models/rentProperty");
const UserModel = require("../models/user");
const { ValidateProperty } = require("../validators/buyAndSellValidation");
const addRentProperty = async (req, res) => {
  try {
    const validate = await ValidateProperty(req.body.property);
  } catch (error) {
    return res.status(500).send("Enter Valid Credentials");
  }
  let newProperty = { ...req.body.property };
  newProperty.owner = req.user;
  newProperty.status = true;

  try {
    const p = await RentPropertyModel.create(newProperty);
    let user = await UserModel.findById(req.user);
    let arr = user.rentproperty;
    arr.push(p._id.toString());
    await UserModel.updateMany({ _id: req.user }, { rentproperty: arr });
    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

module.exports = { addRentProperty };
