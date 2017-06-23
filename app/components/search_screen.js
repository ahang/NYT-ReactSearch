import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Results from "./results";
import Header from "./header";

const API_KEY = "2f4849ecd975430685d3198288b2252e";
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

class SearchScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			topic: "",
			syear: "",
			eyear: "",
            data: null,
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

    handleInputChange(event) {
        //onInputChange update the state key with the appropriate value
        const target = event.target;
        const value = event.target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //onSubmit format the starting and end year, and use axios to get the articles
        event.preventDefault();
        const formatSyear = this.state.syear.split("-").join("");
        const formatEyear = this.state.eyear.split("-").join("");
        axios.get(URL, {
        	params: {
        		"api-key": API_KEY,
        		"q": this.state.topic,
        		"begin_date": formatSyear,
        		"end_date": formatEyear
        	}
        }).then((data) => {
            //on completition set the state keys to empty and add set the state for the data to be the data that I can hand off to the results component
            this.setState({ topic: "",
                syear: "",
                eyear: "",
                data: data});
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Link to = "/"><button className="btnLink btn btn-lg btn-warning btn-block">Home</button></Link>
                <Link to = "/saved"><button className="btn-block btn btn-lg btn-info btnLink">View Saved Articles</button></Link>
                <div className = "row search-row">
                    <h1 className = "text-center">Search Query</h1>
                    <form className = "form-group col-md-4 col-md-offset-4" onSubmit={this.handleSubmit}>
                        <div className = "form-group">
                            <label>
                            Topic:
                                <input
                                    name = "topic"
                                    placeholder = "Input a Topic"
                                    className ="form-control input-lg"
                                    type = "text"
                                    value = {this.state.topic}
                                    onChange = {this.handleInputChange} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                            Starting Year:
                                <input
                                    name = "syear"
                                    className = "form-control input-lg"
                                    type = "date"
                                    value = {this.state.syear}
                                    onChange = {this.handleInputChange} />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                            End Year:
                                <input
                                    name = "eyear"
                                    className ="form-control input-lg"
                                    type = "date"
                                    value = {this.state.eyear}
                                    onChange = {this.handleInputChange} />
                            </label>
                        </div>
                        <input className = "btn btn-lg btn-info" type = "submit" value = "Submit" />
                    </form>
                </div>
                <div className="row">
                    {this.state.data ? <Results data={this.state.data} /> : <div></div>}
                </div>
            </div>
        );
    }
}

export default SearchScreen;