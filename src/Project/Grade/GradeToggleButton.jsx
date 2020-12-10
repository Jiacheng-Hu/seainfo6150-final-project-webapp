import React from "react";

const GradeToggleButton = props => {

    return (
        <button onClick={props.onClick} className="btn btn-default  btn-sm">{props.buttonText}</button>
    )
}

export default GradeToggleButton