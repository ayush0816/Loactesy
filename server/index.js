const express=require('express');
const db=require("./database/db");
const cors=require("cors");
const auth= require("./routes/auth");
const passport=require("passport");
const session=require("express-session");
const privateRouteConfig=require("./config/passportConfig");

privateRouteConfig(passport);

const app=express();
const port='8081';

app.use(express.json());
app.use(cors());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "InstaApp"
}))

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});
app.use("/auth",auth);

app.listen(port, () => {
  console.log("Listening");
});
