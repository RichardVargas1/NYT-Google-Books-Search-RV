const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema ({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true }
});

const Article = mongoose.model("Book", articleSchema);

module.exports = Article;