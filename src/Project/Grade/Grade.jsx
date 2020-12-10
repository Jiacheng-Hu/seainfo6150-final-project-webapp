import React from "react";
import GradeItem from "./GradeItem";

const Grade = props => {
    let content;
    if(props.grade.length){
        content = (
            <div className="table-responsive container">
                <table className="table table-bordered  table-hover table-condensed">
                    <thead>
                        <tr>
                            <td>Course ID</td>
                            <td>Course Name</td>
                            <td>Credit Hour</td>
                            <td>Associated Year</td>
                            <td>Associated Semester</td>
                            <td>Grade</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.grade.map((item) => (
                            <GradeItem gradeItem = {item} key = {item.slug}/>
                        ))}
                    </tbody>
                </table>
            </div>
            
        )
    }else{
        content = null;
    }
    return <div>{content}</div>
}

export default Grade;