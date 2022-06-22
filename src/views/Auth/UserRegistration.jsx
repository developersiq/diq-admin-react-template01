import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Forms.css";

const UserRegistration = (Props) => {
  return (
    <React.Fragment>
      <div className="registration-wrapper">
        <div className="box p-3 rounded">
          <div className="text-center">
            <h2 className="mb-0 text-bold">Welcome</h2>
            <small className="text-secondary">Create Your New Account</small>
          </div>
          <form className="row g-3 mt-1">
            <div className="col-md-6">
              <label className="form-label text-secondary">First Name</label>
              <input type="text" className="form-control rounded-pill" />
            </div>
            <div className="col-md-6">
              <label className="form-label text-secondary">Last Name</label>
              <input type="text" className="form-control rounded-pill" />
            </div>
            <div className="col-md-12">
              <label className="form-label text-secondary">Email</label>
              <input type="text" className="form-control rounded-pill" />
            </div>
            <div className="col-md-12">
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
              <div className="d-flex justify-content-center">
                <button className="btn btn-primary edit-btn" type="submit">
                  Get Started
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
                Already have an account ?
                <a href="/userlogin">
                  <span className="bottom-text p-2">Log In</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserRegistration;
