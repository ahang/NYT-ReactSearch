const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const Article = require("../models/Article.js");

router.get("/api/saved", function(req, res) {
    Article.find({}).exec(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

router.post("/api/save-article", (req, res) => {
    console.log(req.body);
    const newArticle = new Article(req.body);

    newArticle.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data)
        }
    });
});

router.get("/api/delete-article", function(req, res) {

});

module.exports = router;