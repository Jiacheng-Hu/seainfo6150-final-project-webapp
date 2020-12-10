import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const News3 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.newsItem[2].title}<br></br> <small>by {props.newsItem[2].author}</small></h1>
                <time dateTime={props.newsItem[2].timeStamp}></time>
            </header>
            <div className="news">
                <img className="news-image-item" src={props.newsItem[2].image._url} alt="news3"/>
                <HTMLText format={props.newsItem[2].text}/>
            </div>
        </article>
    )
}

export default News3;