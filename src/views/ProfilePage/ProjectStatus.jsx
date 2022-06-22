import React from "react";
import "../../Component/assets/css/Profile.css";

const ProjectStatus = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="profile-sec p-4 mb-4">
          <div className="project">
            <h4>Project Status</h4>
            <p className="pt-4">Web Design</p>
            <div className="progress">
              <div
                className="progress-bar progress-line1"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="pt-4">Website Markup</p>
            <div className="progress">
              <div
                className="progress-bar progress-line2"
                role="progressbar"
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="pt-4">Mobile Template</p>
            <div className="progress">
              <div
                className="progress-bar progress-line3"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p className="pt-4">Backend API</p>
            <div className="progress">
              <div
                className="progress-bar progress-line4"
                role="progressbar"
                aria-valuenow="100"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* BUTTON  */}
      <div className="d-md-flex justify-content-md-end">
        <a href="/userinfo"><button className="btn btn-primary edit-btn" type="button">
          Edit
        </button></a>
      </div>
    </React.Fragment>
  );
};

export default ProjectStatus;
