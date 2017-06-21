import React, { Component } from "react";

class SavedArticles extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount () => {
        console.log("Component Mounted");
        axios.get("/api/saved").then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div className="container">
            </div>
        )
    }
}

export default SavedArticles;
