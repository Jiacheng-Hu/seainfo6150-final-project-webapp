import React from "react";

const GradeItem = props => {
    
    return (
        <tr>
            <td>{props.gradeItem.id}</td>
            <td>{props.gradeItem.name}</td>
            <td>{props.gradeItem.credit}</td>
            <td>{props.gradeItem.year}</td>
            <td>{props.gradeItem.semester}</td>
            <td>{props.gradeItem.grade}</td>
        </tr>
    );
};

export default GradeItem;