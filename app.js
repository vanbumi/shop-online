var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
var config = require("./config/database");
var bodyParser = require("body-parser");
var session = require("express-session");
var expressValidator = require("express-validator");

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

// set routes
var pages = require("./routes/pages.js");
var adminPages = require("./routes/admin_pages.js");

// redirect
app.use("/", pages);
app.use("/admin/pages", adminPages);

// setup middleware body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setup session middleware
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  })
);

// setup sesion middleware
app.use(
  expressValidator({
    errorFormatter: function(param, msg, value) {
      var namespace = param.split("."),
        root = namespace.shift(),
        formParam = root;

      while (namespace.length) {
        formParam += "[" + namespace.shift() + "]";
      }
      return {
        param: formParam,
        msg: msg,
        value: value
      };
    }
  })
);

var port = 3000;
app.listen(port, function() {
  console.log("Server running on port " + port);
});
