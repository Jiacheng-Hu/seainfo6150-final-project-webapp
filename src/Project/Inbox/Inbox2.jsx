import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Inbox2 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.inboxItem[1].title}<br></br> <small>send by {props.inboxItem[1].sender}</small></h1>
                
                <time dateTime={props.inboxItem[1].timeStamp}></time>
            </header>
            <div>
                <HTMLText format={props.inboxItem[1].text}/>
            </div>
        </article>
    )
}

export default Inbox2;