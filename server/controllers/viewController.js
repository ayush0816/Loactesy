const UserModel = require("../models/user");

const getRentedProperty = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user);
    return res.status(200).json(user.rentproperty);
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

const getOwnedProperty = async (req, res) => {
  try {
    const user = await UserModel.findById(req.user);
    return res.status(200).json(user.buyproperty);
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

module.exports = { getOwnedProperty, getRentedProperty };
