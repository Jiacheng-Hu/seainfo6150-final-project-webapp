import React, {useEffect, useState} from "react";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import {isEmpty} from "lodash";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
// import 'bootstrap/dist/js/bootstrap';

import News from "./Project/News/News";
import Events from "./Project/Events/Events";
import Inbox from "./Project/Inbox/Inbox";
import Course from "./Project/Course/Course";
import Grade from "./Project/Grade/Grade";
import Contact from "./Project/Contact/Contact";
import About from "./Project/About/About";
import HomePage from "./Project/HomePage/HomePage";
import ErrorPage from "./Project/ErrorPage/ErrorPage";
import Login from "./Project/Login/Login";
import Friendly from "./Project/Friendly/Friendly";
import Policy from "./Project/Policy/Policy";
import logo from "./Project/images/logo.png";

import News1 from "./Project/News/News1";
import News2 from "./Project/News/News2";
import News3 from "./Project/News/News3";
import News4 from "./Project/News/News4";
import News5 from "./Project/News/News5";
import News6 from "./Project/News/News6";

import Events1 from "./Project/Events/Events1";
import Events2 from "./Project/Events/Events2";
import Events3 from "./Project/Events/Events3";
import Events4 from "./Project/Events/Events4";
import Events5 from "./Project/Events/Events5";
import Events6 from "./Project/Events/Events6";

import Inbox1 from "./Project/Inbox/Inbox1";
import Inbox2 from "./Project/Inbox/Inbox2";
import Inbox3 from "./Project/Inbox/Inbox3";
import Inbox4 from "./Project/Inbox/Inbox4";
import Inbox5 from "./Project/Inbox/Inbox5";
import Inbox6 from "./Project/Inbox/Inbox6";

import Course1 from "./Project/Course/Course1";
import Course2 from "./Project/Course/Course2";
import Course3 from "./Project/Course/Course3";
import Course4 from "./Project/Course/Course4";
import Course5 from "./Project/Course/Course5";
import Course6 from "./Project/Course/Course6";

function App(){
  const[fetchedNewsData, setFetchedNewsData] = useState({});
  const[fetchedEventsData, setFetchedEventsData] = useState({});
  const[fetchedInboxData, setFetchedInboxData] = useState({});
  const[fetchedCourseData, setFetchedCourseData] = useState({});
  const[fetchedGradeData, setFetchedGradeData] = useState({});

  let location = useLocation();

  const [loginCredential,setLoginCredential] = useState({})
  const [loggedIn, setLoggedIn] = useState()

  if(location.state !== undefined) {

      if(location.state.login === true) {
          setLoginCredential({
              login: location.state.login,
              username: location.state.username
          })
          setLoggedIn(true)
      } else {
          setLoginCredential({
              login: location.state.login,
              username: ""
          })
          setLoggedIn(false)
      }
      location.state = undefined
  }

  const handleLogOut = () =>{
    setLoggedIn(false)
  }

  useEffect(() => {
      const fetchNewsData = async () => {
          const response = await fetch("https://demo2247279.mockable.io/news");
          const responseJson = await response.json();
          setFetchedNewsData(Object.values(responseJson));
      };
          if(isEmpty(fetchedNewsData)){
              fetchNewsData();
          }
  }, [fetchedNewsData]);

  
  useEffect(() => {
      const fetchEventsData = async () => {
          const response = await fetch("https://demo2247279.mockable.io/events");
          const responseJson = await response.json();
          setFetchedEventsData(Object.values(responseJson));
      };
          if(isEmpty(fetchedEventsData)){
              fetchEventsData();
          }
  }, [fetchedEventsData]);

  useEffect(() => {
      const fetchInboxData = async () => {
          const response = await fetch("https://demo2247279.mockable.io/inbox");
          const responseJson = await response.json();
          setFetchedInboxData(Object.values(responseJson));
      };
          if(isEmpty(fetchedInboxData)){
              fetchInboxData();
          }
  }, [fetchedInboxData]);

  useEffect(() => {
      const fetchCourseData = async () => {
          const response = await fetch("https://demo2247279.mockable.io/course");
          const responseJson = await response.json();
          setFetchedCourseData(Object.values(responseJson));
      };
          if(isEmpty(fetchedCourseData)){
              fetchCourseData();
          }
  }, [fetchedCourseData]);

  useEffect(() => {
      const fetchGradeData = async () => {
          const response = await fetch("https://demo2247279.mockable.io/grade");
          const responseJson = await response.json();
          setFetchedGradeData(Object.values(responseJson));
      };
          if(isEmpty(fetchedGradeData)){
              fetchGradeData();
          }
  }, [fetchedGradeData]);

  return (
    <div>
      <header className="navbar  navbar-fixed-top bg-header" >
        <div className="container">
          <div className="navbar-header ">
            <Link to="/"><img src={logo} alt="logo"/></Link>
            {/* <a class="navbar-brand" href="#">Project name</a> */}
          </div>
          <div id="navbar" className=" navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
              <Link to="/news" className="header-a">News</Link>
              </li>
              <li>
                <Link to="/events" className="header-a">Events</Link>
              </li>
              <li>
                <Link to="/inbox" className="header-a">Inbox</Link>
              </li>
              <li>
                <Link to="/course" className="header-a">CourseInfo</Link>
              </li>
              <li>
                <Link to="/grade" className="header-a">Grade</Link>
              </li>
              <li>
                <div className="userPanel">
                  {loggedIn ? null : <Link to="/login">Login</Link>}
                  {loggedIn ? <div className="helloText">Hello {loginCredential.username}</div> : null}
                  {loggedIn ? <button onClick={handleLogOut} className="logOut">Log out</button> : null}
                </div>   
              </li>
            </ul>
          </div>
        </div>
        
        
      
      

      </header>
      <div className=" cont">
        <Switch>
          <Route exact path="/"><HomePage/></Route>
              
          <Route exact path="/news"><News newsList={fetchedNewsData}/></Route>
          <Route exact path="/news1"><News1 newsItem={fetchedNewsData}/></Route>
          <Route exact path="/news2"><News2 newsItem={fetchedNewsData}/></Route>
          <Route exact path="/news3"><News3 newsItem={fetchedNewsData}/></Route>
          <Route exact path="/news4"><News4 newsItem={fetchedNewsData}/></Route>
          <Route exact path="/news5"><News5 newsItem={fetchedNewsData}/></Route>
          <Route exact path="/news6"><News6 newsItem={fetchedNewsData}/></Route>

          <Route exact path="/events"><Events eventsList={fetchedEventsData}/></Route>
          <Route exact path="/events1"><Events1 eventsItem={fetchedEventsData}/></Route>
          <Route exact path="/events2"><Events2 eventsItem={fetchedEventsData}/></Route>
          <Route exact path="/events3"><Events3 eventsItem={fetchedEventsData}/></Route>
          <Route exact path="/events4"><Events4 eventsItem={fetchedEventsData}/></Route>
          <Route exact path="/events5"><Events5 eventsItem={fetchedEventsData}/></Route>
          <Route exact path="/events6"><Events6 eventsItem={fetchedEventsData}/></Route>

          <Route exact path="/inbox"><Inbox inboxList={fetchedInboxData}/></Route>
          <Route exact path="/inbox1"><Inbox1 inboxItem={fetchedInboxData}/></Route>
          <Route exact path="/inbox2"><Inbox2 inboxItem={fetchedInboxData}/></Route>
          <Route exact path="/inbox3"><Inbox3 inboxItem={fetchedInboxData}/></Route>
          <Route exact path="/inbox4"><Inbox4 inboxItem={fetchedInboxData}/></Route>
          <Route exact path="/inbox5"><Inbox5 inboxItem={fetchedInboxData}/></Route>
          <Route exact path="/inbox6"><Inbox6 inboxItem={fetchedInboxData}/></Route>

          <Route exact path="/course"><Course courseList={fetchedCourseData}/></Route>
          <Route exact path="/course1"><Course1 courseItem={fetchedCourseData}/></Route>
          <Route exact path="/course2"><Course2 courseItem={fetchedCourseData}/></Route>
          <Route exact path="/course3"><Course3 courseItem={fetchedCourseData}/></Route>
          <Route exact path="/course4"><Course4 courseItem={fetchedCourseData}/></Route>
          <Route exact path="/course5"><Course5 courseItem={fetchedCourseData}/></Route>
          <Route exact path="/course6"><Course6 courseItem={fetchedCourseData}/></Route>

          <Route exact path="/grade"><Grade grade={fetchedGradeData}/></Route>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/about"><About/></Route>
          <Route exact path="/contact"><Contact/></Route>
          <Route exact path="/friendly"><Friendly/></Route>
          <Route exact path="/policy"><Policy/></Route>

          <Route path="*"><ErrorPage/></Route>
        </Switch>
      </div>
      
      <footer className="footer ">
        <div>
          <ul className="footer-nav list-inline">
            <li>
              <Link to="/about" className="footer-a">About Us</Link>
            </li>
            <li>
              <Link to="/contact"  className="footer-a">Contact Us</Link>
            </li>
            <li>
              <Link to="/policy"  className="footer-a">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/friendly"  className="footer-a">Friend Site</Link>
            </li>
          </ul>
        </div>      
        <div className="footer-p">Copyright&nbsp;&copy;&nbsp;2020&nbsp;Jiacheng-Hu&nbsp;Seainfo6150-final-project.&nbsp;All&nbsp;rights&nbsp;reserved.</div>
      </footer>
    </div>
    
  )
}

export default App;
