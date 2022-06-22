import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Information.css";

const General_Info = (props) => {
  return (
    <React.Fragment>
      {/* General Information Section */}
      <section>
        <div className="fs-4 mb-3">
          <strong className="heading">GENERAL INFORMATION</strong>
        </div>
        <div className="p-2 rounded general-info">
          <div className="row">
            <div className="col-md-3 mt-2 user_image">
              <input
                type="email"
                className="form-control rounded profile-image"
                id="inputEmail5"
                placeholder="Profile Image"
              />
            </div>
            <div className="col-md-9 px-3">
              <form className="row g-3 text-secondary mb-3 fw-bold">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="inputEmail4"
                    placeholder="John Deo"
                  />
                </div>

                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Date of Birth
                  </label>
                  <div className="row">
                    <div className="col-md-4">
                      <input
                        type="text"
                        className="form-control rounded"
                        id="inputEmail4"
                        placeholder="20"
                      />
                    </div>
                    <div className="col-md-4">
                      <select id="inputState" className="form-select rounded select-option">
                        <option selected>Jan</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <select id="inputState" className="form-select rounded">
                        <option selected>1989</option>
                        <option>...</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Profession
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="inputAddress"
                    placeholder="Web Developer"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="inputAddress2"
                    placeholder="New York , USA"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    Mail
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="inputCity"
                    placeholder="lorem@gmail.com"
                  />
                </div>

                <div className="col-md-6">
                  <label for="inputZip" className="form-label">
                    Contact
                  </label>
                  <input
                    type="text"
                    className="form-control rounded"
                    id="inputZip"
                    placeholder="+1(000) 000-000"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default General_Info;
