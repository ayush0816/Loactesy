const express = require("express");
const db = require("./database/db");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const privateRouteConfig = require("./config/passportConfig");

const auth = require("./routes/auth");
const buyAndSell = require("./routes/buyAndSell");
const rentAndLet=require("./routes/rentAndLet");

const port = "8081";
const app = express();


privateRouteConfig(passport);

app.use(express.json());
app.use(cors());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "InstaApp",
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
app.use("/rentproperty",rentAndLet);

app.listen(port, () => {
  console.log("Listening");
});
