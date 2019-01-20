const router = require("express").Router();
const ArticleRoutes = router = require("./NYTArticle");
const GoogleRoutes = router = require("./Google");

// Article Routes
router.use("/articles", ArticleRoutes);

// Google Routes
router.use("/google", GoogleRoutes);

// For any other location
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;