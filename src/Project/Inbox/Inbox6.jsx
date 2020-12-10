import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Inbox6 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.inboxItem[5].title}<br></br> <small>send by {props.inboxItem[5].sender}</small></h1>

                <time dateTime={props.inboxItem[5].timeStamp}></time>
            </header>
            <div>
                <HTMLText format={props.inboxItem[5].text}/>
            </div>
        </article>
    )
}

export default Inbox6;