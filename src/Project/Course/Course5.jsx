import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Course5 = props => {
    return (
        <div className="container">
            <div className="panel panel-info course-main">
                <div className="panel-heading">Detail</div>
                <div className="panel-body">
                    <div className="labels">Course Name: <span>{props.courseItem[4].title}</span></div>
                    <div className="labels">CRN: <span>{props.courseItem[4].crn}</span></div>
                    <div className="labels">Subject: <span>{props.courseItem[4].subject}</span></div>
                    <div className="labels">Credit Hour: <span>{props.courseItem[4].credit}</span></div>
                    <div className="labels">Associated Term: <span>{props.courseItem[4].associatedTerm}</span></div>
                    <div className="labels">Lecturer: <span>{props.courseItem[4].lecturer}</span></div>
                    <div className="labels">Schedule: <span>{props.courseItem[4].schedule}</span></div>
                    <HTMLText format={props.courseItem[4].description}/>
                </div>
            </div>
        </div>
        
    )
}

export default Course5;