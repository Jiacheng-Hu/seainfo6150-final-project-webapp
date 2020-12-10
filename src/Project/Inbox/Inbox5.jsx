import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Inbox5 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.inboxItem[4].title}<br></br> <small>send by {props.inboxItem[4].sender}</small></h1>

                <time dateTime={props.inboxItem[4].timeStamp}></time>
            </header>
            <div>
                <HTMLText format={props.inboxItem[4].text}/>
            </div>
        </article>
    )
}

export default Inbox5;