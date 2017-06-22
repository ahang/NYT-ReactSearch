import React, { Component } from "react";
import axios from "axios";

class SavedArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null }
        this.removeArticle = this.removeArticle.bind(this)
    }

    componentDidMount () {
        console.log("Component Mounted");
        axios.get("/api/saved").then((response) => {
            this.setState({ data: response })
            this.renderSavedArticles()
        })
    }

    removeArticle(event) {
        console.log(event.target.value);
        axios.get(`/api/delete-article/${event.target.value}`).then((response) => {
            this.updateArticle()
        })
    }

    updateArticle () {
        axios.get("/api/saved").then((response) => {
            this.setState({ data: response })
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
                            value={article._id}
                            onClick={this.removeArticle}>
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
