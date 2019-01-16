import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import SavedArticles from "./SavedArticles";
import Search from "./Search";

const NYTSearchThing = () => (
    <div className="container">
        <Nav />
        <Header />
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Search} />
                    <Route exact path="/saved" component={SavedArticles} />
                </Switch>
            </div>
        </Router>
    </div>
);

export default NYTSearchThing;