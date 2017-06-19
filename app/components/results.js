import React, { Component } from "react";

class Results extends Component {
    constructor(props) {
        super(props);
        console.log(`The props for results right now is ${this.props.data}`);
    }

    render() {
            return (
                <div>
                    <h1>Results</h1>

                </div>
            )
    }
}

export default Results;