import React from "react";
import GradeItem from "./GradeItem";

const Grade = props => {
  
  let content;

  if (props.grade.length){
    content = (
      <table>
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
    )
  }else{
    content = <div>You have no data!</div>
  }

  return props.grade.length ? content : null;

};

export default Grade;
