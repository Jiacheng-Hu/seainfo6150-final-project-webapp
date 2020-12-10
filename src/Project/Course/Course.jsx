import React from "react";
import {Link} from "react-router-dom";

const Course = props => {
    let content;
    if (props.courseList.length){
        content = (
            <div className="container">
                <ul className="list-group no-point container">
                    {props.courseList.map((item) => (
                        <li>
                            <div className="panel panel-info ">
                                <div className="panel-heading"><div>{item.title}</div></div>
                                <div className="panel-body">
                                    <div>{item.subject}</div>
                                    <div>{item.lecturer}</div>
                                    <Link to={item.slug}><div>Show Details</div></Link>
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

export default Course;