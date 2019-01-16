import axios from "axios";

export default {
    search: function (query) {
        return axios.post("/nyt/" + query);
    },
    getArticles: function () {
        return axios.get("/api/articles");
    },
    getOneArticle: function (id) {
        return axios.get("/api/articles/" + id);
    },
    saveArticles: function (articleData) {
        return axios.post("/api/articles", articleData);
    },
    deleteArticle: function (id) {
        return axios.delete("api/articles/" + id);
    }
};