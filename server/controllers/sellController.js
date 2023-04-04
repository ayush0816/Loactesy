const BuyPropertyModel = require("../models/buyProperty");
const UserModel = require("../models/user");
//const {ValidateProperty}=require("../validators/buyAndSellValidation");
const addBuyProperty = async (req, res) => {
  let newProperty = { ...req.body.property };
  newProperty.owner = req.user;
  newProperty.status = true;
  //await ValidateProperty(newProperty);
  try {
    const p = await BuyPropertyModel.create(newProperty);
    let user = await UserModel.findById(req.user);
    let arr = user.buyproperty;
    //console.log(p);
    arr.push(p._id);
    await UserModel.updateMany({ _id: req.user }, { buyproperty: arr });
    return res.status(200).json({ status: "success" });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = { addBuyProperty };
