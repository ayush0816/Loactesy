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
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const login = async (req, res) => {
  try {
    await ValidateSignin(req.body);
    const user = await UserSchema.findByUserNameAndPassword(req.body);
    token = user.generateJwtToken();
    return res.status(200).json({ token: token, status: "success" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login };
