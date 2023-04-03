import e from "cors";
import passport from "passport";
import JwtPassport from "passport-jwt";

// Model
import { UserModel } from "../models/user";

const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "Locatesy"
}

export default (passport) => {
    passport.use(
        new JWTStrategy(options, async(jwt__payload, done) => {
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
    )
}