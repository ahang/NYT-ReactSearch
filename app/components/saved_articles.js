import React, { Component } from "react";
import axios from "axios";

class SavedArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null }
    }

    componentDidMount () {
        console.log("Component Mounted");
        axios.get("/api/saved").then((response) => {
            this.setState({ data: response })
            console.log(this.state.data.data);
        })
    }

    removeArticle(article, event) {
        console.log(article);
        axios.get(`/api/delete-article/${article._id}`).then((response) => {
            console.log(Woo);
        })
    }

    renderSavedArticles() {
        return this.state.data.data.map((article) => {
            return (
                <div className = "panel panel-primary" key={article._id}>
                    <div className="panel-heading">
                        <h3 className="panel-title">{article.title}</h3>
                    </div>
                    <div className="panel-body">
                        <p><a href={article.url}>Read about it</a></p>
                        <p>Written on: {new Date(article.date).toString()}</p>
                        <button
                            className="btn btn-warning"
                            onClick={this.removeArticle.bind(this, article)}>
                            Remove Article
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Saved Articles</h1>
                {this.state.data ? this.renderSavedArticles() : <div>Moar Loading</div> }
            </div>
        )
    }
}

export default SavedArticles;
