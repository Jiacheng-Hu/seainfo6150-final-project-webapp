import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const News5 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.newsItem[4].title}<br></br> <small>by {props.newsItem[4].author}</small></h1>
                <time dateTime={props.newsItem[4].timeStamp}></time>
            </header>
            <div className="news">
                <img className="news-image-item" src={props.newsItem[4].image._url} alt="news5"/>
                <HTMLText format={props.newsItem[4].text}/>
            </div>
        </article>
    )
}

export default News5;