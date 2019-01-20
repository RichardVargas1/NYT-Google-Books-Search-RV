const router = require("express").Router();
const articlesController = require("../../controllers/ArticleController");

// Matches w/ "/api/articles"
router.route("/")
    .get(articlesController.findAll)
    .post(articlesController.create);

// Macthes w/ "/api/articles/id:"
router
    .route("/:id")
    .get(articlesController.findById)
    .put(articlesController.update)
    .delete(articlesController.remove);

module.exports = router;