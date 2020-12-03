import React from "react";
import {useRouteMatch} from "react-router";


const EventsItem = props => {

    let {url} = useRouteMatch();

    return (
        <li>
            <a href={`${url}/${props.eventsItem.slug}`}><h3>{props.eventsItem.title}</h3></a>
            <p>{props.eventsItem.department}</p>
            <time dateTime={props.eventsItem.timeStamp}>{props.eventsItem.displayTime}</time>
        </li>
    );
};

export default EventsItem;