
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Project from "./Project";


ReactDOM.render(
  <Router basename={/github.io/.test(window.location) ? "/seainfo6150-final-project-webapp" : ""}>
    <Project/>
  </Router>,
  document.getElementById("root")
);