import React from "react";

const HTMLText = props => {
    return <div dangerouslySetInnerHTML={{__html:props.format}}/>;
};

export default HTMLText;