import React from "react";
import { Link } from "react-router-dom";
import './components/styles/NotFound.css'

const NotFound = () => {
    return (
        <div className="container">

            <div className="card404 mt-5 ">

                <h1 className="title404">
                    404
                </h1>
                <p className="text404">
                    opps page not found!
                </p>
                <p className="massage404">
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.

                </p>

                <Link to='/' className="btn btn-primary btn-lg mt-3">Return Home</Link>

            </div>
        </div>
    )
}

export default NotFound