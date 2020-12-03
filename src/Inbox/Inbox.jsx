import React from "react";
import InboxItem from "./InboxItem";
import {withRouter} from "react-router-dom";
import {isEmpty} from "lodash";
import Content from "../InboxItem/Content";

class Inbox extends React.Component{
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
      if(!isEmpty(this.props.inboxes)){
        content = (
          <ul>
            {Object.values(this.props.inboxes).map((item) => (
              <InboxItem inboxItem = {item} key = {item.slug}/>
            ))}
          </ul>
        )
      }else{
        content = <div>You have no data!</div>
      }
    }else if(this.hasSetNews){
      if(this.props.inboxes[slug]){
        content=(<Content inbox={this.props.inboxes[slug]}></Content>);
      }else{
        content=null;
      }
    }
    return <div>{content}</div>;
  }
}

export default withRouter(Inbox);
