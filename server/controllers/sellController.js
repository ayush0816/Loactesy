const BuyPropertyModel = require("../models/buyProperty");
const UserModel = require("../models/user");
const { ValidateProperty } = require("../validators/buyAndSellValidation");
const addBuyProperty = async (req, res) => {
  try {
    const validate = await ValidateProperty(req.body.property);
  } catch (error) {
    return res.status(500).send("Enter Valid Credentials");
  }

  let newProperty = { ...req.body.property };
  newProperty.owner = req.user;
  newProperty.status = true;

  try {
    const p = await BuyPropertyModel.create(newProperty);
    let user = await UserModel.findById(req.user);
    let arr = user.buyproperty;
    arr.push(p._id);
    await UserModel.updateMany({ _id: req.user }, { buyproperty: arr });
    return res.status(200).json({ status: "success" });
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

module.exports = { addBuyProperty };
