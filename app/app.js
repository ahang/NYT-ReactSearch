import React from "React";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Main from "./components/Main";
import SearchScreen from "./components/search_screen";
import Results from "./components/results";

ReactDOM.render(
	<BrowserRouter>
		<Route path="/" component={Main} />
        <Route path="/" component={SearchScreen} />
        <Route path="/results" component={Results} />
	</BrowserRouter>,
	document.getElementById("app"));