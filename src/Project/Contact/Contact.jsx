import React from "react";

const Contact = () => {

    return (
        
        <div className="text-center">
            <h2>Contact Us</h2>
            <div className="contactUs">
                <div className="labels">Email Address:</div>
                <div className="margin-left">hu.jiac@neu.edu</div>
            </div>
            <div  className="contactUs margin-top">
                <div className="labels">Address:</div>
                <div className="margin-left">5346 15th Ave NE</div>
                <div>Seattle, WA 98105</div>
            </div>
            <div  className="contactUs margin-top">
                <div className="labels">Phone Number:</div>
                <div className="margin-left">206-123-4321</div>
            </div>
        </div>
    )
}

export default Contact;