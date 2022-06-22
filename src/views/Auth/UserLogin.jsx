import React from "react";

import "../../Component/assets/css/Forms.css";

const UserLogin = (props) => {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="box p-3 rounded">
          <div className="text-center">
            <h2 className="mb-0">Welcome Back</h2>
            <small className="text-secondary">
              Log in to your Account to Continue
            </small>
          </div>
          <form className="row g-3 mt-1">
            <div className="email-block">
              <label className="form-label text-secondary">Email</label>
              <input type="text" className="form-control rounded-pill" />
            </div>
            <div className="password-block">
              <label className="form-label text-secondary">Password</label>
              <input type="text" className="form-control rounded-pill" />
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                />
                <label
                  className="form-check-label text-secondary"
                  for="flexCheckDefault"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <p className="text-center mb-2">
                <a href="/forgotpassword">
                  <span className="bottom-text">Forgot Password?</span>
                </a>
              </p>
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary edit-btn" type="submit">
                  Log in
                </button>
              </div>
            </div>
            <p className="mb-0 text-secondary text-center">or</p>
              <div className="row">
                <div className="social-media">
                  <div className="col-md-6">
                    <img
                      src={require("../../Component/assets/images/google-icon.png")}
                    />
                    <br /> Continue
                    <br /> With Google
                  </div>
                  <div className="col-md-6">
                    <img
                      src={require("../../Component/assets/images/facebook-icon.png")}
                    />
                    <br /> Continue
                    <br /> with facebook
                  </div>
                </div>
                <div className="mt-3 text-center">
                  Not Registered ?
                  <a href="/registration">
                    <span className="bottom-text"> Create an account</span>
                  </a>
                </div>
              </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserLogin;
