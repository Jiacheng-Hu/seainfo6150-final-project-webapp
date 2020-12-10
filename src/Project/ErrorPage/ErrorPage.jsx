import React from "react";
import {Link} from "react-router-dom";

const ErrorPage = () => {
    return(
        <div className="errorPage">
            <div className="row text-center">
                <div className="col-md-12 align-self-center">
                    <h1 className="errorh1">Sorry, Wrong Page</h1>
                    <p>Don't worry, just click the button below and we can find you!
                    </p>
                    <Link to="/"><div>Back to Homepage</div></Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;