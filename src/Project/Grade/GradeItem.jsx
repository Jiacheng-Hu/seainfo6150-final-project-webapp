import React, {useState} from "react";
import GradeToggleButton from "./GradeToggleButton";

const GradeItem = props => {

    const[buttonText, setButtonText] = useState("Show More");

    function onClick(){
        if(buttonText === "Show More"){
            setButtonText("Show Less");
        }else{
            setButtonText("Show More");
        }
    }

    return (
        <tr>
            <td>{props.gradeItem.id}</td>
            <td>{props.gradeItem.name}</td>
            <td>{props.gradeItem.credit}</td>
            <td>{props.gradeItem.year}</td>
            <td>{props.gradeItem.semester}</td>
            <td>
                <div>total: {props.gradeItem.grade}</div>
                {
                    buttonText === "Show Less" ? 
                    <>
                    <div>attendance: {props.gradeItem.attendance}</div>
                    <div>assignment: {props.gradeItem.assignment}</div>
                    <div>exam: {props.gradeItem.exam}</div>
                    </> : null
                }
                <GradeToggleButton onClick={onClick} buttonText={buttonText}/>
            </td>
        </tr>
    )
}

export default GradeItem;