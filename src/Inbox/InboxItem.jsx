import React from "react";
import {useRouteMatch} from "react-router-dom";

const InboxItem = props => {

    let {url} = useRouteMatch();

    return (
        <li>
            <h3><a href={`${url}/${props.inboxItem.slug}`}>{props.inboxItem.title}</a></h3>
            <p>{props.inboxItem.sender}</p>
            <time dateTime={props.inboxItem.timeStamp}>{props.inboxItem.displayTime}</time>
        </li>
    );
};

export default InboxItem;