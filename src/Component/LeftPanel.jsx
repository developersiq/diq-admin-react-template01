import React from "react";
// import  "./assets/SideMenu.js";
import $ from "jquery";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,faHomeAlt,
  faCube,faTable,faLock,
  faUser,faExclamationTriangle,
  faQuestionCircle,faChartLine,
  faHeadset, faXmark,faAddressCard, 
  faRegistered, faKey,
} from "@fortawesome/free-solid-svg-icons";
import "./assets/css/Variable.css";
import "./assets/css/SideMenu.css";

const LeftPanel = (props) => {
  // $("button").click(function(){
  //     $.get("demo_test.asp", function(data, status){
  //         alert("Data: " + data + "\nStatus: " + status);
  //     });
  // });

  setTimeout(() => {
    $(".sidebar-dropdown > a").click(function () {
      console.log("-------------------------");
      $(".sidebar-submenu").slideUp(200);
      if ($(this).parent().hasClass("active")) {
        $(".sidebar-dropdown").removeClass("active");
        $(this).parent().removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(200);
        $(this).parent().addClass("active");
      }
    });

    $("#close-sidebar").click(function () {
      $(".page-wrapper").removeClass("toggled");
    });
    $("#show-sidebar").click(function () {
      $(".page-wrapper").addClass("toggled");
    });
  }, 300);

  return (
    <React.Fragment>
      <a id="show-sidebar" className="btn btn-sm btn-dark" href="#home">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <nav id="sidebar" className="sidebar-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-brand">
            <a href="/">
              <img
                className="img-fluid my-2"
                src={require("./assets/images/company-logo.png")}
              />
              <span className="logo-name">Company Name</span>
            </a>
            <div id="close-sidebar">
              <FontAwesomeIcon icon={faXmark} />
            </div>
          </div>
          {/* <!-- Left Panel  --> */}
          <div className="sidebar-menu">
            <ul>
              <li className="header-menu">
                {/* <!-- <span>General</span> --> */}
              </li>
              <li className="sidebar-dropdown">
                <a href="/">
                  <FontAwesomeIcon icon={faHomeAlt} className="sidebar-icons" />
                  <span>Dashboard</span>
                  <span className="badge badge-pill badge-warning">New</span>
                </a>
              </li>
              <li>
                <a href="/component">
                  <FontAwesomeIcon icon={faCube} className="sidebar-icons" />
                  <span>Components</span>
                </a>
              </li>
              <li className="header-menu">
                <span>Forms and Tables</span>
              </li>
              <li>
                <a href="/forms">
                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    className="sidebar-icons"
                  />

                  <span>Forms</span>
                  {/* <!-- <span className="badge badge-pill badge-primary">Beta</span> --> */}
                </a>
              </li>
              <li>
                <a href="/tablelist">
                  <FontAwesomeIcon icon={faTable} className="sidebar-icons" />
                  <span>Tables</span>
                </a>
              </li>

              <li className="header-menu">
                <span>Authentication</span>
              </li>

              {/* <li>
                    <a href="">
                      <FontAwesomeIcon icon={faLock} className="sidebar-icons"/>
                      <span>Authentication</span>
                    </a>
                  </li> */}
              <li>
                <a href="/profile">
                  <FontAwesomeIcon icon={faUser} className="sidebar-icons" />
                  <span>User Profile</span>
                </a>
              </li>

              <li>
                <a href="/registration">
                  <FontAwesomeIcon
                    icon={faRegistered}
                    className="sidebar-icons"
                  />
                  <span>User Registration</span>
                </a>
              </li>
              <li>
                <a href="/forgotpassword">
                  <FontAwesomeIcon icon={faKey} className="sidebar-icons" />
                  <span>Forgot Password</span>
                </a>
              </li>

              <li>
                <a href="/userlogin">
                  <FontAwesomeIcon icon={faLock} className="sidebar-icons" />
                  <span>User Login</span>
                </a>
              </li>

              {/* <li>
                    <a href="/timeline">
                      <FontAwesomeIcon icon={faHistory} className="sidebar-icons"/>
                      <span>Timeline</span>
                    </a>
                  </li> */}

              <li className="header-menu">
                <span>Pages</span>
              </li>
              <li>
                <a href="/error">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="sidebar-icons"
                  />
                  <span>Errors</span>
                </a>
              </li>
              <li>
                <a href="/modals">
                  <FontAwesomeIcon
                    icon={faExclamationTriangle}
                    className="sidebar-icons"
                  />
                  <span>Modals</span>
                </a>
              </li>
              <li>
                <a href="/faq">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="sidebar-icons"
                  />
                  <span>FAQ</span>
                </a>
              </li>

              <li>
                <a href="/aboutus">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="sidebar-icons"
                  />
                  <span>About Us</span>
                </a>
              </li>
              {/* <li>
                    <a href="/pricing">
                      <FontAwesomeIcon icon={faDollarSign} className="sidebar-icons"/>
                      <span>Pricing</span>
                    </a>
                  </li> 
                   <li className="header-menu">
                    <span>Charts and Maps</span>
                  </li> */}
              <li>
                <a href="/charts">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    className="sidebar-icons"
                  />
                  <span>Charts</span>
                </a>
              </li>
              {/* <li>
                    <a href="/maps">
                      <FontAwesomeIcon icon={faMap} className="sidebar-icons"/>
                      <span>Maps</span>
                    </a>
                  </li> */}
              <li className="header-menu">
                <span>Others</span>
              </li>
              {/* <li>
                    <a href="/menulevel">
                      <FontAwesomeIcon icon={faBars} className="sidebar-icons"/>
                      <span>Menu Levels</span>
                    </a>
                  </li> */}
              {/* <li>
                    <a href="/documentation">
                      <FontAwesomeIcon icon={faFolder} className="sidebar-icons"/>

                      <span>Documentation</span>
                    </a>
                  </li> */}
              <li>
                <a href="/support">
                  <FontAwesomeIcon icon={faHeadset} className="sidebar-icons" />
                  <span>Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default LeftPanel;
