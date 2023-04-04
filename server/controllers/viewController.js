const UserModel = require("../models/user");

const getRentedProperty = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user);
    return res.status(200).json(user.rentproperty);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

const getOwnedProperty = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user);
    return res.status(200).json(user.buyproperty);
  } catch (err) {
    return res.status(500).json({ error: err });
  }
};

module.exports = { getOwnedProperty, getRentedProperty };
