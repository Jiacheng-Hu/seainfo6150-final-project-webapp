import React from "react";
import CourseItem from "./CourseItem.jsx";
import {withRouter} from "react-router-dom";
import {isEmpty} from "lodash";
import Content from "../CourseInfoItem/Content";

class Course extends React.Component{
  constructor (props){
    super(props);
    this.hasSetNews=false;
  }
  componentWillReceiveProps(){
    this.hasSetNews=true;
  }
  render(){
    let slug=false;
    if(this.props.match.params.slug){
      slug = this.props.match.params.slug;
    }
    let content;
    if(!slug){
      if(!isEmpty(this.props.courses)){
        content = (
          <ul>
            {Object.values(this.props.courses).map((item) => (
              <CourseItem courseItem = {item} key = {item.slug}/>
            ))}
          </ul>
        )
      }else{
        content = <div>You have no data!</div>
      }
    }else if(this.hasSetNews){
      if(this.props.courses[slug]){
        content=(<Content course={this.props.courses[slug]}></Content>);
      }else{
        content=null;
      }
    }
    return <div>{content}</div>;
  }
}

export default withRouter(Course);
