const express = require("express");
const authController = require("../controllers/authControllers");
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
router.post("/login", passport.authenticate('jwt'),(req,res,next)=>{
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    jwt.verify(token,"Locatesy", (err, user) => {
        delete user["iat"];
        if (err) return res.Status(403).json({error : err});
        req.user = user;
        next();
      });
},authController.login);
router.post("/signup", authController.signup);

module.exports = router;
