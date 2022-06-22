import React from "react";
import MainLayout from "../../Component/MainLayout";
import "../../Component/assets/css/Pages.css";
import "../../Component/assets/css/Variable.css";

const Support = (props) => {
  return (
    <React.Fragment>
      <MainLayout>
        <section>
          <div  className="mt-3">
            <h1>24*7 Help & Support</h1>
          </div>

          {/* =========================================== */}
          <div className="support-wrapper w-50 p-3 mt-3">
            <form className="row g-3">
              <div className="col-md-12">
                <label for="inputName" className="form-label">
                  <b className="text-secondary">Your Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="name*"
                  required
                />
              </div>
              <div className="col-md-12">
                <label for="inputEmail4" className="form-label">
                  <b className="text-secondary">Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="email*"
                  required
                />
              </div>

              <div className="col-md-12">
                <label for="inputPhoneNumber" className="form-label">
                  <b className="text-secondary">Phone Number</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputPhoneNumber"
                  placeholder="phone*"
                  required
                />
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Message</label>
              </div>

              <div className="col-12">
                <button type="submit" className="amount-btn px-3 py-1 text-center rounded-pill text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </MainLayout>
    </React.Fragment>
  );
};

export default Support;
