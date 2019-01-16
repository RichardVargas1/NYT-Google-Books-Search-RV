import React, { Component } from "react";
import ArticleResults from "../ArticleResults";
import API from "../utils/API";
// import "./style.css";

class Search extends Component {
    state = {
        search: "",
        searchResults: []
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.startYear && this.state.endYear) {
            API.search("&q=" + this.state.search + "&begin_date=" + this.state.startYear + "&end_date=" + this.state.endYear)
                .then(res => {
                    this.setState({ searchResults: res.data })
                    this.handleResetButton();
                })
        } else {
            API.search("&q=" + this.state.search)
                .then(res => {
                    this.setState({ searchResults: res.data })
                    this.handleResetButton();
                });
        }
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleArticleSave = index => {
        const newArticle = {
            title:
                (this.state.searchResults[index].heading.print_heading) ?
                    this.state.searchResults[index].heading.print_heading
                    :
                    this.state.searchResults[index].heading.main,
            authors:
                (this.state.searchResults[index].heading.print_heading) ?
                    this.state.searchResults[index].heading.print_heading
                    :
                    this.state.searchResults[index].heading.main,
            description:
                (this.state.searchResults[index].heading.print_heading) ?
                    this.state.searchResults[index].heading.print_heading
                    :
                    this.state.searchResults[index].heading.main,
            iamge:
                (this.state.searchResults[index].heading.print_heading) ?
                    this.state.searchResults[index].heading.print_heading
                    :
                    this.state.searchResults[index].heading.main,
            url: this.state.searchResults[index].web_url
        }
        API.saveArticles(newArticle)
    };

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            {/* Card Header */}
                            <div className="card-header">
                                <strong>
                                    <i className="fa fa-list-alt"></i> Search
                                </strong>
                            </div>
                            <div className="card-body">
                                <form>
                                    {/* Search Box */}
                                    <div className="form-group">
                                        <label htmlFor="search">Search Term:</label>
                                        <input onChange={this.handleInputChange} value={this.state.search} type="text" className="form-control" name="search"></input>
                                    </div>
                                    {/* Submit & Clear Buttons */}
                                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-default" id="run-search">
                                        <i className="fa fa-search"></i> Search
                                    </button>
                                    <button type="reset" onClick={this.handleResetButton} className="btn btn-default" id="clear-all">
                                        <i className="fa fa-trash"></i> Clear Results
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <ArticleResults
                    result={this.state.searchResults}
                    saveButton={this.handleArticleSave}
                />
            </div>
        );
    };
};

export default Search;