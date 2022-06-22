import React, { Component } from "react";
import Graph from "../../Component/Graph";
import MainLayout from "../../Component/MainLayout";

class HomeView extends Component {
  render() {
    return (
      <React.Fragment>
        <MainLayout>
         <Graph />
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default HomeView;
