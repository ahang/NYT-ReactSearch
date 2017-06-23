import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import Main from "./components/Main";
import SearchScreen from "./components/search_screen";
import Results from "./components/results";
import SavedArticles from "./components/results";

const App = () {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path = "/search" component = {SearchScreen} />
                    <Route path = "/saved" component = {SavedArticles} />
                    <Route exact path = "/" component = {Main} />
                </Switch>
            </HashRouter>
        </div>
    )
}

ReactDOM.render(
	<App />,
	document.getElementById("app"));