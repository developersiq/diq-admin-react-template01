import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/ForgotPassword.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockAlt } from "@fortawesome/free-solid-svg-icons";

const ForgotPassword = (props) => {
  return (
    <React.Fragment>
      <div className="card-body  my-4 rounded forgot-password">
        <div className="text-center">
          <h2 className="mb-0 text-bold">Forgot Password?</h2>
          <small className="text-secondary">
            Enter your registered email ID to reset the password
          </small>
        </div>        
        <div className="m-auto rounded p-1 unlock-icon-div">
          <FontAwesomeIcon className="fs-1 unlock-icon" icon={faUnlockAlt} />
        </div>
        <form className="form-body">
          <div className="row g-3">
            <div className="col-12">
              <label for="inputEmailid" className="form-label text-secondary">
                Email id
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="inputEmailid"
              />
            </div>
            <div className="col-12">
              <div className="d-grid gap-3">
                <a href="/newpassword"
                  type="submit"
                  className="btn text-white rounded-pill m-auto submit-button"
                >
                  Reset Password
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
