import React, { Component } from "react";

class Results extends Component {
    constructor(props) {
        super(props);
    }

    saveArticle(article, event) {
        console.log("saving article");
        console.log(article);
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
                        <p>Published: {article.pub_date}</p>
                        <button
                            className="btn btn-danger"
                            onClick={this.saveArticle.bind(this, article)}>
                            Save Article
                        </button>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Results this is ze page</h1>
                {this.renderArticles()}
            </div>
        )
    }
}

export default Results;