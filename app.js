var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./config/database");

// DB Connection
mongoose.connect(config.database);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Connected to MongoDB");
});

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
