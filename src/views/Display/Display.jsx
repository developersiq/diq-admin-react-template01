import React, { Component } from "react";
import MainLayout from "../../Component/MainLayout";
import Heading from "./Heading";

class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <MainLayout>
          <Heading/>
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default Display;
