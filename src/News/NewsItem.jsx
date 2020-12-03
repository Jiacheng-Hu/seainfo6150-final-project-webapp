import React from "react";
import { useRouteMatch} from "react-router";

const NewsItem = props => {

    let{url} = useRouteMatch();

    return (
        <div>
        <li>
            <h3>
                <a href={`${url}/${props.newsItem.slug}`}>{props.newsItem.title}</a>
            </h3>
            <time dateTime={props.newsItem.timeStamp}>{props.newsItem.displayDate}</time>
            <p>{props.newsItem.shortText}</p>
        </li>
        </div>
    );
};

export default NewsItem;