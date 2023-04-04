const express = require("express");
const rentController = require("../controllers/rentController");
const letController = require("../controllers/letController");
const router = express.Router();
const passport = require("passport");
const fetchUser = require("../middlewares/fetchuser");

router.get(
  "/rent",
  passport.authenticate("jwt"),
  fetchUser,
  rentController.getAvailableProperties
);
router.put(
  "/rent",
  passport.authenticate("jwt"),
  fetchUser,
  rentController.rentProperty
);

router.post(
  "/let",
  passport.authenticate("jwt"),
  fetchUser,
  letController.addRentProperty
);

module.exports = router;
