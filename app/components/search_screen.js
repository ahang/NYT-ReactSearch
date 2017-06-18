import React, { Component } from "react";
import axios from "axios";

const API_KEY = "2f4849ecd975430685d3198288b2252e";
const URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

class SearchScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			topic: "",
			syear: 0,
			eyear: 0
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
        axios.get(URL, {
        	params: {
        		"api-key": API_KEY,
        		"q": this.state.topic,
        		"begin_date": this.state.syear,
        		"end_date": this.state.eyear
        	}
        }).then(function(response) {
        	console.log(response);
        })

    }

    render() {
        return (
            <div className="container">
                <div> Hello I am the searchscreen </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Topic:
                        <input
                            name = "topic"
                            type = "text"
                            value = {this.state.topic}
                            onChange = {this.handleInputChange} />
                    </label>
                    <label>
                    Starting Year:
                        <input
                            name ="syear"
                            type = "number"
                            value = {this.state.syear}
                            onChange= {this.handleInputChange} />
                    </label>
                    <label>
                    End Year:
                        <input
                            name = "eyear"
                            type = "number"
                            placeholder = "YYYY-MM-DD"
                            value = {this.state.eyear}
                            onChange = {this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <div>
                	<h1>These are the current state</h1>
                		<ul>
                			<li>{this.state.topic}</li>
                			<li>{Number(this.state.syear)}</li>
                			<li>{Number(this.state.eyear)}</li>
                		</ul>
                </div>
            </div>
        );
    }
}

export default SearchScreen;