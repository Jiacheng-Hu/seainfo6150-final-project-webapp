import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Content = props => {

    return(
        <div>
            <h4>{props.event.title}</h4>
            <HTMLText format={props.event.text}/>
            <div>{props.event.department}</div>
            <time dateTime={props.event.timeStamp}>{props.event.displayTime}</time>
        </div>
    );
};

export default Content;