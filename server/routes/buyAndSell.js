const express = require("express");
const buyController = require("../controllers/buyController");
const sellController = require("../controllers/sellController");
const fetchUser=require("../middlewares/fetchuser");
const router = express.Router();

router.get("/buy", buyController.getAvailableProperties);
router.put("/buy",passport.authenticate('jwt'), fetchUser,buyController.buyProperty);


router.post("/sell",passport.authenticate('jwt'), fetchUser,sellController.addBuyProperty);


module.exports = router;
