import React, { Component } from "react";

import SearchScreen from "./search_screen";

class Main extends Component {
	render() {
		return (
			<div className="container panel">
				<div className="row">
					<h1 className="text-center">New York Times Article Scrubber</h1>
					<h2 className="text-center">Search for and annotate articles of interest!</h2>
				</div>
				<SearchScreen />
			</div>
		)
	}
}

export default Main;