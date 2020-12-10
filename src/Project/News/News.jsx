import React from "react";
import {Link} from "react-router-dom";

const News = props => {
    let content;
    if (props.newsList.length){
        content = (
            <div className="container">
                <div className="row">
                    {props.newsList.map((item) => (
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail new-panel">
                                <div>
                                    <img className="news-image" src={item.image._url} alt={item.slug}/>
                                </div>
                                <div className="caption">
                                    <Link to={item.slug} className="news-link">{item.title}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }else{
        content = null;
    }

    return (
        <div>{content}</div>
    )
}


export default News;