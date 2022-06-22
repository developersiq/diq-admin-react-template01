import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";


const FormElement = (props) => {
  return (
    <React.Fragment>
       <h4 class="heading mt-5">Form Layout</h4>
              <div class="form-element-wrapper form-edit rounded p-4 mt-3">
                <h5><i class="far fa-user"></i> User Registration</h5>
                <hr/>
                <form class="row g-3 text-dark">
                  <div class="col-md-6">
                    <label for="inputfirstname" class="form-label"> First Name</label>
                   <input type="text" class="form-control" aria-label="First name"/>
                  </div>
                  <div class="col-md-6">
                    <label for="inputlastname" class="form-label"> Last Name </label>
                   <input type="text" class="form-control" aria-label="Last name"/>
                  </div>
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Password</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                      <option selected>Choose...</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                   <input type="text" class="form-control" id="inputZip" />
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="gridCheck"/>
                      <label class="form-check-label" for="gridCheck">Check me out</label>
                    </div>
                  </div>
                  
                  <div class="d-md-flex justify-content-center">
                    <button class="btn edit-btn" type="submit">Sign in</button>
                  </div>
                </form>
              </div>
    </React.Fragment>
  );
};

export default FormElement;
