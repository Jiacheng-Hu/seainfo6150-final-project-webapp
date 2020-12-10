import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const News2 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.newsItem[1].title}<br></br> <small>by {props.newsItem[1].author}</small></h1>
                <time dateTime={props.newsItem[1].timeStamp}></time>
            </header>
            <div className="news">
                <img className="news-image-item" src={props.newsItem[1].image._url} alt="news2"/>
                <HTMLText format={props.newsItem[1].text}/>
            </div>
        </article>
    )
}

export default News2;