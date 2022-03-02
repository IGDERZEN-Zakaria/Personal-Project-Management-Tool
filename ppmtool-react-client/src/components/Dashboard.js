import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1 class="alert alert-warning">Welcome to the Dashboard</h1>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    );
  }
}

export default Dashboard;
