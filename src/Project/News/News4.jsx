import React from "react";
import HTMLText from "../HTMLText/HTMLText";

const News4 = props => {

    return (
        <article className="container">
            <header>
                <h1>{props.newsItem[3].title}<br></br> <small>by {props.newsItem[3].author}</small></h1>
                <time dateTime={props.newsItem[3].timeStamp}></time>
            </header>
            <div className="news">
                <img className="news-image-item" src={props.newsItem[3].image._url} alt="news4"/>
                <HTMLText format={props.newsItem[3].text}/>
            </div>
        </article>
    )
}

export default News4;