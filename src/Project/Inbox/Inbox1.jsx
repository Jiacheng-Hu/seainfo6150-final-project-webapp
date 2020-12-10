import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Inbox1 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.inboxItem[0].title}<br></br> <small>send by {props.inboxItem[0].sender}</small></h1>
                {/* <h1>{props.inboxItem[0].title}</h1>
                <address>send by {props.inboxItem[0].sender}</address> */}
                <time dateTime={props.inboxItem[0].timeStamp}></time>
            </header>
            <div>
                <HTMLText format={props.inboxItem[0].text}/>
            </div>
        </article>
    )
}

export default Inbox1;