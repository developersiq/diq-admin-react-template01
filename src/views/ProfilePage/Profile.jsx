import React, { Component } from "react";
import MainLayout from "../../Component/MainLayout";
import ProfileInfo from "./ProfileInfo";

class Profile extends Component {
  render() {
    return (
      <React.Fragment>
        <MainLayout>
        <ProfileInfo />
        </MainLayout>
      </React.Fragment>
    );
  }
}

export default Profile;
