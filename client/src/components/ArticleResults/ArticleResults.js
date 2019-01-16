import React from "react";
import "./style.css";

const ArticleResults = ({ articleResult, saveArticleButton }) => (
    <div className="row">
        <div className="col-sm-12">
            <div className="ArticleResult">
                <div className="ArticleResult-header">
                    <strong>
                        <i className="fa fa-table"></i> Article Results
                    </strong>
                </div>

                <div className="ArticleResult-body">
                    {articleResult.map((headings, index) =>
                        <div key={index} className="alert alert-danger" role="alert">
                            {headings.heading.print_heading ?
                                <a href={headings.link} target="noopener">{headings.heading.print_heading}</a>
                                :
                                <a href={headings.link} target="noopener">{headings.heading.main}</a>
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