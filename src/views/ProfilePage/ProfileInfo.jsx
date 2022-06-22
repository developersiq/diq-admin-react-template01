import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMugSaucer,
  faCalendar,
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import "../../Component/assets/css/Profile.css";

import Bio from "./Bio";
import ProjectStatus from "./ProjectStatus";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const ProfileInfo = (props) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-lg-4">
          <div className="profile-sec p-4 mb-4 text-center">
            <h4 className="heading">Info</h4>
            <img
              className="profile-img"
              src={require("../../Component/assets/images/user.jpg")}
              alt="Profile-pic"
            />
            <h3>John Doe</h3>
            <table className="user-detail">
              <tbody>
                <tr>
                  <th>
                    <i
                      className="fa-solid fa-mug-saucer icon"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faMugSaucer} />
                    </i>
                  </th>
                  <td>
                    <p>Web Developer</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <i
                      className="fa-regular fa-calendar icon"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faCalendar} />
                    </i>
                  </th>
                  <td>
                    <p>Jan 20, 1989</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    
                      <FontAwesomeIcon icon={faLocationDot} />
                  </th>
                  <td>
                    <p>New York, USA</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <i
                      className="fa-regular fa-envelope icon"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                  </th>
                  <td>
                    <p> lorem@gmail.com</p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <i className="fa fa-phone icon" aria-hidden="true">
                      <FontAwesomeIcon icon={faPhone} />
                    </i>
                  </th>
                  <td>
                    <p>+1 (000) 000-0000</p>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="social-media-icon">
              <ul>
                <li>
                  <a href="#">
                    <i
                      className="fa-brands fa-facebook-square icon-media"
                      aria-hidden="true"
                    >
                      <FontAwesomeIcon icon={faFacebookF} />
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-media">
                      <FontAwesomeIcon icon={faInstagram} />
                    </span>
                    {/* <i
                          className="fa-twitter icon-media"
                          aria-hidden="true"
                        >
                        </i> */}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-media">
                      <FontAwesomeIcon icon={faLinkedinIn} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <Bio />
          <ProjectStatus />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileInfo;
