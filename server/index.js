const express = require("express");
const db = require("./database/db");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const privateRouteConfig = require("./config/passportConfig");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const auth = require("./routes/auth");
const buyAndSell = require("./routes/buyAndSell");
const rentAndLet = require("./routes/rentAndLet");
const view = require("./routes/view");

const port = process.env.PORT;
const app = express();

privateRouteConfig(passport);

app.use(express.json());
app.use(cors());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.use("/auth", auth);
app.use("/purchaseproperty", buyAndSell);
app.use("/rentproperty", rentAndLet);
app.use("/viewproperty", view);

app.listen(port, () => {
  console.log(`kudos! App is up and running at port : ${port}`);
});
