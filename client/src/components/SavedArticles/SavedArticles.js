import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";

class SavedArticles extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.displayArticles();
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.displayArticles())
      .catch(err => console.log(err));
  };

  displayArticles = () => {
    API.getArticles()
      .then(res => {
        this.setState({ savedArticles: res.data })
        console.log(res.data)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="articleCard">
            <div className="card-header">
              <strong>
                <i className="fa fa-table"></i> Saved Articles
              </strong>
            </div>
            <div className="card-body" id="savedArticles-section">
              {this.state.savedArticles.map(headings =>
                <div key={headings._id} className="saved-articles alert alert-primary" role="alert">
                  <a href={headings.url} target="noopener">{headings.title}</a>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.deleteArticle(headings._id)}
                  >Delete Article
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default SavedArticles;