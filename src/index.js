import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import LoginApp from "./Login/LoginApp";
import Project from "./Project"
// import ErrorPage from "./ErrorPage/ErrorPage"

ReactDOM.render(
  
  <Router basename={/github.io/.test(window.location) ? "/seainfo6150-final-project-webapp" : ""}>
    <Switch>
      {/* <Route path="/">
        <App/>
      </Route> */}
      {/* <Route path="/" exact>
        <LoginApp/>
      </Route> */}
      <Route path="/">
        <Project/>
      </Route>
      {/* <Route>
        <ErrorPage/>
      </Route> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
