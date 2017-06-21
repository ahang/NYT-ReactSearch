import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container panel">
                <div className="row">
                    <h1 className="text-center">New York Times Article Scrubber</h1>
                    <h2 className="text-center">Search for and annotate articles of interest!</h2>
                </div>
            </div>
        )
    }
}

export default Header;