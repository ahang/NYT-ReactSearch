//server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

const Article = require("./models/Article");

const app = express();
const PORT = process.env.PORT || 3000;

//logging and setting up bodyparser
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//using static public folder
app.use(express.static("./public"));

var databaseString = process.env.MONGODB_URI || "mongodb://localhost/NYT-ReactSearch";

mongoose.Promise = Promise;
mongoose.connect(databaseString);
const db = mongoose.connection;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});


//Testing
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, function() {
    console.log(`Server Running on Port: ${PORT}`);
});