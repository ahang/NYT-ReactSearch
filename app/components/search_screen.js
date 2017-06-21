import React, { Component } from "react";
import axios from "axios";

import Results from "./results";

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
        const target = event.target;
        const value = event.target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
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
            this.setState({ topic: "",
                syear: "",
                eyear: "",
                data: data});
            console.log(this.state);
            this.props.history.push("/results");
            // console.log(this.state.data.data.response.docs[0].lead_paragraph);
        });
    }

    render() {
        return (
            <div className="container">
                <form className="form-group" onSubmit={this.handleSubmit}>
                    <div className="col-xs-2 form-group">
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
                    <div className="col-xs-3 form-group">
                        <label>
                        Starting Year:
                            <input
                                name ="syear"
                                className ="form-control input-lg"
                                type = "date"
                                value = {this.state.syear}
                                onChange= {this.handleInputChange} />
                        </label>
                    </div>
                    <div className="col-xs-3 form-group">
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
                    <input type="submit" value="Submit" />
                </form>
                {this.state.data ? <Results data={this.state.data} /> : <div>No Results yet</div>}
            </div>
        );
    }
}

export default SearchScreen;