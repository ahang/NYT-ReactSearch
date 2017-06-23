import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Main from "./components/Main";
import SearchScreen from "./components/search_screen";
import Results from "./components/results";
import SavedArticles from "./components/saved_articles";

const App = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path = "/search" component = {SearchScreen} />
                <Route exact path = "/saved" component = {SavedArticles} />
                <Route exact path = "/" component = {Main} />
            </Switch>
        </HashRouter>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("app"));