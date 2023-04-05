const express = require("express");
const router = express.Router();
const viewController = require("../controllers/viewController");
const passport = require("passport");
const fetchUser = require("../middlewares/fetchuser");

router.get(
  "/rented",
  passport.authenticate("jwt"),
  fetchUser,
  viewController.getRentedProperty
);
router.get(
  "/owned",
  passport.authenticate("jwt"),
  fetchUser,
  viewController.getOwnedProperty
);

module.exports = router;
