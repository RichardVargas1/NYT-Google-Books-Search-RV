import React from "react";
import "./style.css";

const ArticleResults = ({ articleResult, saveArticleButton }) => (
    <div className="row">
        <div className="col-sm-12">
            <div className="card">
                <div className="card-header">
                    <strong>
                        <i className="fa fa-table"></i> Article Results
                    </strong>
                </div>

                <div className="card-body" id="article-section">
                    {articleResult.map((headings, index) =>
                        <div key={index} className="result result-danger" role="result">
                            {headings.heading.print_heading ?
                                <a href={headings.web_url} target="_blank">{headings.heading.print_heading}</a>
                                :
                                <a href={headings.web_url} target="_blank">{headings.heading.main}</a>
                            }
                            <button type="button" id={index} onClick={() => saveArticleButton(index)} className="float-right btn btn-primary">Save Article</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
);

export default ArticleResults;