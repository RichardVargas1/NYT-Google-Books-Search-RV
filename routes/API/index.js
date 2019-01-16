const router = require("express").Router();
const articleRoutes = router = require("./NYTArticle");

// article routes
router.use("/books", articleRoutes);

module.exports = router;