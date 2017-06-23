import React, { Component } from "react";

import Header from "./header";
import Links from "./links";
import Footer from "./footer";

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<Links />
				<Footer />
			</div>
		)
	}
}

export default Main;