import React from "react";
import {isEmpty} from "lodash";
import NewsItem from "./NewsItem";
import Content from "../NewsItem/Content";
import { withRouter } from "react-router-dom";

class News extends React.Component{
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
      if(!isEmpty(this.props.news)){
        content = (
          <ul>
            {Object.values(this.props.news).map((item) => (
              <NewsItem newsItem = {item} key = {item.slug}/>
            ))}
          </ul>
        )
      }else{
        content = <div>You have no data!</div>
      }
    }else if(this.hasSetNews){
      if(this.props.news[slug]){
        content=(<Content news={this.props.news[slug]}></Content>);
      }else{
        content=null;
      }
    }
    return <div>{content}</div>;
  }
}

export default withRouter(News);