const express=require('express');
const db=require("./database/db");
const cors=require("cors");
import passport from "passport";
import session from 'express-session';
import privateRouteConfig from './config/routeConfig';

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

app.listen(port, () => {
  console.log("Listening");
});
