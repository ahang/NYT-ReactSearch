import React, { Component } from "react";
import axios from "axios";

class Results extends Component {
    constructor(props) {
        super(props);
        this.saveArticle = this.saveArticle.bind(this)
    }

    saveArticle( event) {
        //grabbing the dataset based off the button and posting it to node/express to handle
        const article = event.target.dataset;
        axios.post("/api/save-article", {
            "title": article.title,
            "date": article.date,
            "url": article.url
        }).then((response) => {
            // console.log("Successful")
        })
    }

    renderArticles() {
        return this.props.data.data.response.docs.slice(0, 5).map((article) => {
            return(
                <div className="panel panel-primary" key={article._id}>
                    <div className="panel-heading">
                        <h3 className="panel-title">{article.headline.main}</h3>
                    </div>
                    <div className="panel-body">
                        {article.lead_paragraph}
                        <p><a href={article.web_url}>Read more</a></p>
                        <p>Published: {new Date(article.pub_date).toString()}</p>
                        <button
                            className = "btn btn-success"
                            data-title = {article.headline.main}
                            data-url = {article.web_url}
                            data-date = {article.pub_date}
                            onClick = {this.saveArticle}>
                            Save Article
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className = "container">
                <h1 className = "text-center">Results</h1>
                {this.props.data ? this.renderArticles() : <div>Loading..</div>}
            </div>
        )
    }
}

export default Results;
