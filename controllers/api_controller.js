const express = require("express");
const router = express.Router();
const Article = require("../models/Article.js");

//a route to get all saved articles
router.get("/api/saved", (req, res) => {
    Article.find({}).exec((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

//router to save an article to db
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

//router to delete an article
router.get("/api/delete-article/:articleId", (req, res) => {
    console.log(req.params.articleId);
    Article.findOneAndRemove(
    { "_id": req.params.articleId}).exec((err, response) => {
        if (err) {
            console.log(err);
        } else {
            res.json(response)
        }
    })
});

//router to send initial index on / load
router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

module.exports = router;