import React, { Component } from "react";
import FormElement from "./FormElement";
import MainLayout from "../../Component/MainLayout";
import FormElement1 from "./FormElement1";
import FormElement3 from "./FormElement3";

class Forms extends Component {
  render() {
    return (
      <React.Fragment>
        <MainLayout>
          <FormElement1/>
          <FormElement3/>
          <FormElement />
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default Forms;
