import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const Content = (props) => {
    return (
      <article>
        {/* this is an example of how you insert props into a react component */}
        <header>
          <h1>{props.news.title}</h1>
          <address>
            by {props.news.author} (
            <a href='mailto:{props.news.authorEmail}'>{props.news.authorEmail}</a>)
            <br />
          </address>
          <time dateTime={props.news.timeStamp}>{props.news.displayDate} </time>
        </header>
        <HTMLText format={props.news.text} />
      </article>
    );
  };

export default Content;