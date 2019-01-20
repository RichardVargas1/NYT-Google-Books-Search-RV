const axios = require("axios");
const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        let { query: params } = req;
        axios
            .get("https://www.googleapis.com/books/v1/volumes", {
                params
            })
            .then(results =>
                results.data.items.filter(
                    result =>
                        result.volumeInfo.title &&
                        result.volumeInfo.infoLink &&
                        result.volumeInfo.authors &&
                        result.volumeInfo.description &&
                        result.volumeInfo.imageLinks &&
                        result.volumeInfo.imageLinks.thumbnail
                )
            )
            .then(apiArticles =>
                db.Article.find().then(dbArticles =>
                    apiArticles.filter(apiArticle =>
                        dbArticles.every(dbArticle => dbArticle.googleId.toString() !== apiArticle.id)
                    )
                )
            )
            .then(articles => res.json(articles))
            .catch(err => res.status(422).json(err));
    }
};