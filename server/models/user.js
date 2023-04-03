import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
  name: String,
  username: { type: String, unique: true},
  password: String,
});

userSchema.methods.generateJwtToken = function() {
  return jwt.sign({ user: this._id.toString() }, "InstagramApp")
}

userSchema.statics.findByUserNameAndPassword = async({ username, password }) => {
  const user = await UserModel.findOne({ userName });
  if (!user)
      throw new Error("User does not exists");

  const doesPasswordMatch = await bcrypt.compare(password, user.password);

  if (!doesPasswordMatch)
      throw new Error("Invalid Password !!!");

  return user;
}

userSchema.statics.findByUserName = async({ userName }) => {
  
  const checkUserByUserName = await UserModel.findOne({ userName });
  if (checkUserByUserName)
      throw new Error("User with this username already exists");
  return false;
}

userSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password"))
      return next();

  
  bcrypt.genSalt(8, (error, salt) => {
      if (error)
          return next(error);

      
      bcrypt.hash(user.password, salt, (error, hash) => {
          if (error)
              return next(error);

         
          user.password = hash
          return next();
      })
  })
});

const UserSchema = mongoose.model("User", userSchema);

module.exports = UserSchema;
