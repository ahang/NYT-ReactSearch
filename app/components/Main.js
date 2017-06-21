import React, { Component } from "react";

import Header from "./header";
import Results from "./results";
import SearchScreen from "./search_screen";
import SavedArticles from "./saved_articles"

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<SearchScreen />
				<SavedArticles />
			</div>
		)
	}
}

export default Main;