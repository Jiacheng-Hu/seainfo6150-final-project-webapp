import React from "react";
import {Link} from "react-router-dom";

const Events = props => {
    let content;
    if (props.eventsList.length){
        content = (
            <div className="container">
                <ul className="list-group no-point ">
                    {props.eventsList.map((item) => (
                        <li>
                            <div className="panel panel-info ">
                                <div className="panel-heading"><Link to={item.slug}>{item.title}</Link></div>
                                <div className="panel-body">
                                <time dateTime={item.timeStamp}>{item.displayTime}</time>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            
        )
    }else{
        content = null;
    }

    return (
        <div>{content}</div>
    )
}

export default Events;