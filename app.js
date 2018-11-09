var express = require("express");
var path = require("path");

// Initial app
var app = express();

// Setup View Engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Setup public folder
app.use(express.static(path.join(__dirname, "public")));

// Setup index
app.get("/", function(req, res) {
  res.send("Welcome to index");
});

var port = 3000;
app.listen(port, function() {
  console.log("Server running on port " + port);
});
