import React from "react";
import EventsItem from "./EventsItem";
import {isEmpty} from "lodash";
import Content from "../EventsItem/Content";
import {withRouter} from "react-router-dom";

class Events extends React.Component{
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
      if(!isEmpty(this.props.events)){
        content = (
          <ul>
            {Object.values(this.props.events).map((item) => (
              <EventsItem eventsItem = {item} key = {item.slug}/>
            ))}
          </ul>
        )
      }else{
        content = <div>You have no data!</div>
      }
    }else if(this.hasSetNews){
      if(this.props.events[slug]){
        content=(<Content event={this.props.events[slug]}></Content>);
      }else{
        content=null;
      }
    }
    return <div>{content}</div>;
  }
}

export default withRouter(Events);