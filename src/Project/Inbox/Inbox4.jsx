import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Inbox4 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.inboxItem[3].title}<br></br> <small>send by {props.inboxItem[3].sender}</small></h1>
                <time dateTime={props.inboxItem[3].timeStamp}></time>
            </header>
            <div>
                <HTMLText format={props.inboxItem[3].text}/>
            </div>
        </article>
    )
}

export default Inbox4;