import React from "React";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { createBrowserHistory as history } from "history";

import Main from "./components/Main";
import SearchScreen from "./components/search_screen";
import Results from "./components/results";
import SavedArticles from "./components/results";

ReactDOM.render(
	<HashRouter>
        <div>
    		<Route exac path="/" component={Main} />
            <Route exac path="/" component={SearchScreen} />
            <Route path="/results" component={Results} history={history}/>
            <Route path="/saved" component={SavedArticles} />
        </div>
	</HashRouter>,
	document.getElementById("app"));