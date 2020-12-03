import React, {useEffect, useState} from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import {isEmpty} from "lodash";
import HomePage from "./HomePage/HomePage.jsx";
import News from "./News/News.jsx";
import Events from "./Events/Events.jsx";
import Inbox from "./Inbox/Inbox.jsx";
import Course from "./CourseInfo/Course.jsx";
import Grade from "./Grade/Grade.jsx";
import AboutUs from "./About/AboutUs.jsx";
import ContactUs from "./Contact/ContactUs.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";

const Project = props => {
    let {url} = useRouteMatch();

    const[fetchedNewsData, setFetchedNewsData] = useState({});
    const[fetchedEventsData, setFetchedEventsData] = useState({});
    const[fetchedInboxData, setFetchedInboxData] = useState({});
    const[fetchedCourseData, setFetchedCourseData] = useState({});
    const[fetchedGradeData, setFetchedGradeData] = useState({});


    useEffect(() => {
        const fetchNewsData = async () => {
            const response = await fetch("http://demo2247279.mockable.io/news");
            const responseJson = await response.json();
            setFetchedNewsData(responseJson);
        };
            if(isEmpty(fetchedNewsData)){
                fetchNewsData();
            }
    }, [fetchedNewsData]);

    
    useEffect(() => {
        const fetchEventsData = async () => {
            const response = await fetch("http://demo2247279.mockable.io/events");
            const responseJson = await response.json();
            setFetchedEventsData(responseJson);
        };
            if(isEmpty(fetchedEventsData)){
                fetchEventsData();
            }
    }, [fetchedEventsData]);

    useEffect(() => {
        const fetchInboxData = async () => {
            const response = await fetch("http://demo2247279.mockable.io/inbox");
            const responseJson = await response.json();
            setFetchedInboxData(responseJson);
        };
            if(isEmpty(fetchedInboxData)){
                fetchInboxData();
            }
    }, [fetchedInboxData]);

    useEffect(() => {
        const fetchCourseData = async () => {
            const response = await fetch("http://demo2247279.mockable.io/course");
            const responseJson = await response.json();
            setFetchedCourseData(responseJson);
        };
            if(isEmpty(fetchedCourseData)){
                fetchCourseData();
            }
    }, [fetchedCourseData]);

    useEffect(() => {
        const fetchGradeData = async () => {
            const response = await fetch("http://demo2247279.mockable.io/grade");
            const responseJson = await response.json();
            setFetchedGradeData(responseJson);
        };
            if(isEmpty(fetchedGradeData)){
                fetchGradeData();
            }
    }, [fetchedGradeData]);
    

    return(
        <div className="project">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to={`${url}/news`}>News</Link>
                        </li>
                        <li>
                            <Link to={`${url}/events`}>Events</Link>
                        </li>
                        <li>
                            <Link to={`${url}/inbox`}>Inbox</Link>
                        </li>
                        <li>
                            <Link to={`${url}/course`}>Course Info</Link>
                        </li>
                        <li>
                            <Link to={`${url}/grade`}>Grade</Link>
                        </li>
                        <li>
                            <Link to={`${url}/about`}>About Us</Link>
                        </li>
                        <li>
                            <Link to={`${url}/contact`}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path={`${url}/`} exact>
                    <HomePage/>
                </Route>
                <Route path={`${url}/news/:slug?`}  exact render={() => (<News news={fetchedNewsData}/>)}></Route>
                <Route path={`${url}/events/:slug?`} exact render={() => (<Events events={fetchedEventsData}/>)}></Route>
                <Route path={`${url}/inbox/:slug?`} exact render={() => (<Inbox inboxes={fetchedInboxData}/>)}></Route>
                <Route path={`${url}/course/:slug?`} exact render={() => (<Course courses={fetchedCourseData}/>)}></Route>
                <Route path={`${url}/grade`} exact>
                    {isEmpty(fetchedGradeData) ? null : (
                        <Grade grade = {Object.values(fetchedGradeData)}/>
                    )}
                </Route>
                <Route path={`${url}/about`} exact>
                    <AboutUs/>
                </Route>
                <Route path={`${url}/contact`} exact>
                    <ContactUs/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </div>
    );
};

export default Project;