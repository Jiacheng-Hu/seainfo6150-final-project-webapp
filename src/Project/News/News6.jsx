import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const News6 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.newsItem[5].title}<br></br> <small>by {props.newsItem[5].author}</small></h1>
                <time dateTime={props.newsItem[5].timeStamp}></time>
            </header>
            <div className="news">
                <img className="news-image-item" src={props.newsItem[5].image._url} alt="news6"/>
                <HTMLText format={props.newsItem[5].text}/>
            </div>
        </article>
    )
}

export default News6;