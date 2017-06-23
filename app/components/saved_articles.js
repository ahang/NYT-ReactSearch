import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "./header"

class SavedArticles extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null }
        this.removeArticle = this.removeArticle.bind(this)
    }

    componentDidMount () {
        // console.log("Component Mounted");
        //On initial component, use updateArticle to set the state with the existing saved article
        this.updateArticle()
    }

    removeArticle(event) {
        // console.log(event.target.value);
        //remove an article based on the article id from mongo and reupdate the state
        axios.get(`/api/delete-article/${event.target.value}`).then((response) => {
            this.updateArticle()
        })
    }

    updateArticle () {
        //setting state with new articles if any
        axios.get("/api/saved").then((response) => {
            this.setState({ data: response })
        })
    }

    renderSavedArticles() {
        return this.state.data.data.map((article) => {
            return (
                <div className = "panel panel-primary" key={article._id}>
                    <div className = "panel-heading">
                        <h3 className = "panel-title">{article.title}</h3>
                    </div>
                    <div className = "panel-body">
                        <p><a href = {article.url}>Read about it</a></p>
                        <p>Written on: {new Date(article.date).toString()}</p>
                        <button
                            className = "btn btn-danger"
                            value = {article._id}
                            onClick = {this.removeArticle}>
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
            <Header />
            <Link to = "/search"><button className="btn btnLink btn-lg btn-success btn-block">Search for Articles</button></Link>
            <Link to = "/"><button className="btn btnLink btn-lg btn-warning btn-block">Home</button></Link>
                <h1 className="text-center">Saved Articles</h1>
                { this.state.data ? this.renderSavedArticles() : <div>Moar Loading</div> }
            </div>
        )
    }
}

export default SavedArticles;
