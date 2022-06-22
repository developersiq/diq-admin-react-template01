import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBell, 
  faCommentAlt, 
  faUser,
  faSearch, faCaretDown, faAngleDown
}
from "@fortawesome/free-solid-svg-icons";
import "./assets/css/Variable.css";

const TopPanel = (props) => {
  return (
    <React.Fragment>
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-6 mb-md-0 mb-4">
            {/* <!-- seacrh form start--> */}
            <div className="search">
              <input
                type="text"
                className="search-input"
                placeholder="What are you looking for?"
              />
              <button type="submit" className="search-button">
              <FontAwesomeIcon icon={faSearch}/>

                <i className="fa fa-search"></i>
              </button>
            </div>
            {/* <!-- search form end --> */}  
          </div>
          <div className="col-12 col-sm-12 col-md-6 ">
            {/* <!-- top right start -->
                <!-- language --> */}
            <div className="tr-nav-wrapper d-flex justify-content-end align-items-center">
              <div className="sl-nav">
                <div className="d-flex justify-content-end align-items-center">
                  <div
                    className=""
                    href="#"
                    role="button"
                    id="dropdownLanguage"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <b>English <FontAwesomeIcon icon={faAngleDown} />
                    </b>
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
                  </div>
                  <ul className="dropdown-menu" aria-labelledby="dropdownLanguage">
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="sl-flag flag-de">
                          <div id="germany"></div>
                        </i>
                        <span className="active">Deutsch</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="sl-flag flag-usa">
                          <div id="English"></div>
                        </i>{" "}
                        <span>English</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- language end -->
                  <!-- notification --> */}
              <div className="center notification icon d-none">
              <FontAwesomeIcon icon={faBell}/>
                <div className="notification-number">6</div>
              </div>
              <div className="list-unstyled d-flex justify-content-end">
                <div className="notification icon">
                  <div
                    className=""
                    href="#"
                    role="button"
                    id="dropdownNotification"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faCommentAlt}/>
                    <div className="notification-number">6</div>
                  </div>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownNotification"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="notification icon">
                  <div
                    className=""
                    href="#"
                    role="button"
                    id="dropdownComment"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                                  <FontAwesomeIcon icon={faBell}/>

                    <i className="far fa-comment"></i>
                    <div className="notification-number">6</div>
                  </div>

                  <ul className="dropdown-menu" aria-labelledby="dropdownComment">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="notification icon">
                  <div
                    className=""
                    href="#"
                    role="button"
                    id="dropdownUser"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                                  <FontAwesomeIcon icon={faUser}/>

                    <i className="fa-solid fa-user"></i>
                  </div>

                  <ul className="dropdown-menu" aria-labelledby="dropdownUser">
                    <li>
                      <a className="dropdown-item" href="/profile">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Notification end --> */}
            </div>
            {/* <!-- top right end --> */}
          </div>
        </div>
           
        <div className="clearfix pt-4"></div>
    </React.Fragment>
  );
};

export default TopPanel;
