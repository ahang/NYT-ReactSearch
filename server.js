//server dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongojs = require("mongojs");
const mongoose = require("mongoose");

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

const databaseString = process.env.MONGODB_URI || "mongodb://localhost/NYT-ReactSearch";

mongoose.Promise = Promise;
mongoose.connect(databaseString);
const db = mongoose.connection;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

//Importing Routes
const api = require("./controllers/api_controller.js");

app.use("/", api);

app.listen(PORT, function() {
    console.log(`Server Running on Port: ${PORT}`);
});