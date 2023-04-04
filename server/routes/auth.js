const express = require("express");
const authController = require("../controllers/authControllers");
const router = express.Router();
const passport=require('passport');

router.post("/login", passport.authenticate('jwt'),authController.login);
router.post("/signup", authController.signup);
module.exports = router;
