import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div className="container">
            <div className="col-md-12">
            <Link to = "/search"><button className="btn-block btn btn-lg btn-success btnLink">Search for Articles</button></Link>
            <Link to = "/saved"><button className="btn-block btn btn-lg btn-info btnLink">View Saved Articles</button></Link>
            </div>
        </div>
    )
}

export default Links;