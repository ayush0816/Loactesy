const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  username: String,
  password: String,
});

const UserSchema = mongoose.model("User", userSchema);

module.exports = UserSchema;
