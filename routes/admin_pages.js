var express = require("express");
var router = express.Router();

// Setup index
router.get("/", function(req, res) {
  res.send("Admin Area");
});

module.exports = router;
