import React from "React";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { createBrowserHistory as history } from "history";

import Main from "./components/Main";
import SearchScreen from "./components/search_screen";
import Results from "./components/results";
import SavedArticles from "./components/results";

ReactDOM.render(
	<BrowserRouter>

            <Switch>
                <Route path="/search" component={SearchScreen} />
                <Route path="/saved" component={SavedArticles} />
                <Route path="/" component={Main} />
            </Switch>

	</BrowserRouter>,
	document.getElementById("app"));