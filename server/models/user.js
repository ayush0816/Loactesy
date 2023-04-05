const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String, required: true },
  username: { type: String, unique: true },
  buyproperty: [{ type: mongoose.Types.ObjectId, ref: "Buy Property" }],
  rentproperty: [{ type: mongoose.Types.ObjectId, ref: "Rent Property" }],
  password: String,
});

userSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, process.env.SECRET);
};

userSchema.statics.findByUserNameAndPassword = async ({
  username,
  password,
}) => {
  const user = await UserModel.findOne({ username });
  if (!user) throw new Error("User does not exists");

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("Invalid Password !!!");

  return user;
};

userSchema.statics.findByUserName = async ({ username }) => {
  const checkUserByUserName = await UserModel.findOne({ username });
  if (checkUserByUserName)
    throw new Error("User with this username already exists");
  return false;
};

userSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      user.password = hash;
      return next();
    });
  });
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
