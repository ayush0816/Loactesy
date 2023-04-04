const UserSchema = require("../models/user");
const {
  ValidateSignup,
  ValidateSignin,
} = require("../validators/authValidation");
const signup = async (req, res) => {
  try {
    await ValidateSignup(req.body);
    await UserSchema.findByUserName(req.body);
    const user = await UserSchema.create(req.body);
    token = user.generateJwtToken();

    return res.status(200).json({ token: token, status: "success" });
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

const login = async (req, res) => {
  try {
    await ValidateSignin(req.body);
    const user = await UserSchema.findByUserNameAndPassword(req.body);
    token = user.generateJwtToken();
    return res.status(200).json({ token: token, status: "success" });
  } catch (error) {
    return res.status(400).json({ error: error.message, status: "failed" });
  }
};

module.exports = { signup, login };
