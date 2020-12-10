import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const News1 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.newsItem[0].title}<br></br> <small>by {props.newsItem[0].author}</small></h1>

                <time dateTime={props.newsItem[0].timeStamp}></time>
            </header>
            <div className="news">
                <img className="news-image-item" src={props.newsItem[0].image._url} alt="news1"/>
                <HTMLText format={props.newsItem[0].text}/>
            </div>
        </article>
    )
}

export default News1;