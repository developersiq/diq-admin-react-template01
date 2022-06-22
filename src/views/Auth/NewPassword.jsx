import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/ForgotPassword.css";


const NewPassword = (props) => {
  return (
    <React.Fragment>
      <div className="card-body  my-4 rounded forgot-password">
        <div className="text-center">
          <h2 className="mb-0 text-bold">Forgot Password?</h2>
          <small className="text-secondary">
          Please enter your new password!
          </small>
        </div>        
        <form className="form-body">
          <div className="row g-3">
            <div className="col-12">
              <label for="inputEmailid" className="form-label text-secondary mt-1">
                New Password
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="inputEmailid"
              />
            </div>

            <div className="col-12">
            <label for="inputEmailid" className="form-label text-secondary">
                Confirm Password
              </label>
              <input
                type="email"
                className="form-control rounded-pill"
                id="inputEmailid"
              />
            </div>

            <div className="col-12">
              <div className="d-grid gap-3">
                <button
                  type="submit"
                  className="btn text-white rounded-pill m-auto submit-button"
                >
                  Change Password
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default NewPassword;
