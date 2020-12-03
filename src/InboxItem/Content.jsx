import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Content = props => {

    return (
        <div>
            <h4>{props.inbox.title}</h4>
            <address>{props.inbox.sender}</address>
            <time dateTime={props.inbox.timeStamp}>{props.inbox.displayTime}</time>
            <HTMLText format={props.inbox.text}/>
        </div>
            
    );
};

export default Content;