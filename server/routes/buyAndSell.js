const express = require("express");
const buyController = require("../controllers/buyController");
const sellController = require("../controllers/sellController");
const router = express.Router();

router.get("/buy", buyController);
router.get("/sell", sellController);

module.exports = router;
