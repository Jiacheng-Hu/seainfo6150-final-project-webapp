import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Events1 = props => {

    return (
        <div className="container">
            <div className="row">
                <article className="col-xs-12 col-sm-8">
                    <h1>{props.eventsItem[0].title}</h1>
                    <HTMLText format = {props.eventsItem[0].text}/>
                    <time dateTime={props.eventsItem[0].timeStamp}>{props.eventsItem[0].displayTime}</time>
                    <div>Departments</div>
                    <div>{props.eventsItem[0].department}</div>
                </article>

                <div className="col-xs-0 col-sm-3 col-sm-offset-1">
                    <div className="sidebar-module">
                        <h4 className="labels">More Events</h4>
                        <ul className="list-inline">
                            <li className="margin-top">
                                <a href="/events2">{props.eventsItem[1].title}</a>
                                <time dateTime={props.eventsItem[1].timeStamp}>{props.eventsItem[1].displayTime}</time>
                            </li>
                            <li className="margin-top">
                                <a href="/events3">{props.eventsItem[2].title}</a>
                                <time dateTime={props.eventsItem[2].timeStamp}>{props.eventsItem[2].displayTime}</time>
                            </li>
                            <li className="margin-top">
                                <a href="/events4">{props.eventsItem[3].title}</a>
                                <time dateTime={props.eventsItem[3].timeStamp}>{props.eventsItem[3].displayTime}</time>
                            </li>
                            <li className="margin-top">
                                <a href="/events5">{props.eventsItem[4].title}</a>
                                <time dateTime={props.eventsItem[4].timeStamp}>{props.eventsItem[4].displayTime}</time>
                            </li>
                            <li className="margin-top">
                                <a href="/events6">{props.eventsItem[5].title}</a>
                                <time dateTime={props.eventsItem[5].timeStamp}>{props.eventsItem[5].displayTime}</time>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events1;