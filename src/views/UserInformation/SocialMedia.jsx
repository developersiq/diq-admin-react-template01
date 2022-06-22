import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = (props) => {
  return (
    <React.Fragment>
      {/* Social Section */}
      <section>
        <div className="mt-5 mb-3">
          <strong className="heading">Social</strong>
        </div>
        <div className="p-3 social-icons-wrapper">
          <div class="row g-3 mt-2">
            <div class="col">
              <div className="d-flex">
                <FontAwesomeIcon
                  className="icons rounded-circle"
                  icon={faPlus}
                />
                <input
                  type="text"
                  class="form-control rounded"
                  placeholder=""
                  aria-label="First name"
                />
              </div>
            </div>
            <div class="col">
              <div className="d-flex">
                <FontAwesomeIcon
                  className="icons rounded-circle"
                  icon={faLinkedinIn}
                />
                <input
                  type="text"
                  class="form-control rounded"
                  placeholder="@John_deo"
                  aria-label="@John_deo"
                />
              </div>
            </div>
          </div>
          <div className="row g-3 mt-2">
            <div class="col">
              <div className="d-flex">
                <FontAwesomeIcon
                  className="icons rounded-circle"
                  icon={faTwitter}
                />
                <input
                  type="text"
                  class="form-control rounded"
                  placeholder="@John_deo"
                  aria-label="@John_deo"
                />
              </div>
            </div>
            <div class="col">
              <div className="d-flex">
                <FontAwesomeIcon
                  className="icons rounded-circle"
                  icon={faFacebookF}
                />
                <input
                  type="text"
                  class="form-control rounded"
                  placeholder="@John_deo"
                  aria-label="@John_deo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SocialMedia;
