import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Inbox3 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.inboxItem[2].title}<br></br> <small>send by {props.inboxItem[2].sender}</small></h1>
                <time dateTime={props.inboxItem[2].timeStamp}></time>
            </header>
            <div>
                <HTMLText format={props.inboxItem[2].text}/>
            </div>
        </article>
    )
}

export default Inbox3;