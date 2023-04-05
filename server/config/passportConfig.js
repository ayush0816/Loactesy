const JwtPassport = require("passport-jwt");
const dotenv = require("dotenv");
const UserModel = require("../models/user");
dotenv.config({ path: "./config/config.env" });
const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExists = await UserModel.findById(jwt__payload.user);
        if (!doesUserExists) {
          return done(null, false);
        }
        return done(null, doesUserExists);
      } catch (error) {
        return done(error, false);
      }
    })
  );
};
