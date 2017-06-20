import React from "React";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { createBrowserHistory as history } from "history";

import Main from "./components/Main";
import SearchScreen from "./components/search_screen";
import Results from "./components/results";

ReactDOM.render(
	<BrowserRouter>
        <div>
    		<Route exac path="/" component={Main} />
            <Route exac path="/" component={SearchScreen} />
            <Route path="/results" component={Results} history={history}/>
        </div>
	</BrowserRouter>,
	document.getElementById("app"));