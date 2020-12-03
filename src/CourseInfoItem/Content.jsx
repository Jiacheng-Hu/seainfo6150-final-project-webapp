import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Content = props => {

    return (

        <div>
            <h3>{props.course.title}</h3>
            <div>CRN: {props.course.crn}</div>
            <div>Subject: {props.course.subject}</div>
            <div>Credit Hour: {props.course.credit}</div>
            <div>Associated Term: {props.course.associatedTerm}</div>
            <div>Lecturer: {props.course.lecturer}</div>
            <div>Schedule: {props.course.schedule}</div>
            <HTMLText format={props.course.description}/>
        </div>

    );
};

export default Content;