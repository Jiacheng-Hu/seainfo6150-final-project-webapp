import React from "react";
import {useRouteMatch} from "react-router-dom";

const CourseItem = props => {

    let {url} = useRouteMatch();

    return (
        <li>
            <h3><a href={`${url}/${props.courseItem.slug}`}>{props.courseItem.title}</a></h3>
            <p>CRN: {props.courseItem.crn}</p>
            <p>Schedule: {props.courseItem.schedule}</p>
        </li>
    );
};

export default CourseItem;