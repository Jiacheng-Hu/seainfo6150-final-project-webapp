import React from "react";
import {Link} from "react-router-dom";

const Inbox = props => {
    let content;
    if (props.inboxList.length){
        content = (
            <div className="container">
                <ul className="list-group no-point ">
                    {props.inboxList.map((item) => (
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

export default Inbox;