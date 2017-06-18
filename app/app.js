import React from "React";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";

import Main from "./components/Main";

ReactDOM.render(
	<HashRouter>
		<div>
			<Route path="/" component={Main} />
		</div>
	</HashRouter>,
	document.getElementById("app"));