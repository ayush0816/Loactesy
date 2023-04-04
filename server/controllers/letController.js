const RentPropertyModel = require("../models/rentProperty");
const UserModel = require("../models/user");
//const {ValidateProperty}=require("../validators/buyAndSellValidation");
const addRentProperty = async (req, res) => {
  let newProperty = { ...req.body.property };
  newProperty.owner = req.user;
  newProperty.status = true;
  //await ValidateProperty(newProperty);
  try {
    const p = await RentPropertyModel.create(newProperty);
    let user = await UserModel.findById(req.user);
    let arr = user.buyproperty;
    //console.log(p);
    arr.push(p._id.toString);
    await UserModel.updateMany({ _id: req.user }, { buyproperty: arr });
    return res.status(200).json({ status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = { addRentProperty };
