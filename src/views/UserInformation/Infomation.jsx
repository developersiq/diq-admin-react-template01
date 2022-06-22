import React, { Component } from "react";
import MainLayout from "../../Component/MainLayout";
import About from "./About";
import SocialMedia from "./SocialMedia";
import General_Info from "./General_Info";
import ProjectStatus2 from "./ProjectStatus2";

class Information extends Component {
  render() {
    return (
      <React.Fragment>
        <MainLayout>
          <General_Info />
          <About />
          <SocialMedia />
          <ProjectStatus2/>
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default Information;
