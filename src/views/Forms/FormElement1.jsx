import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Forms.css";

const FormElement1 = (props) => {
  return (
    <React.Fragment>
      <h4 class="heading">Form Layout</h4>
            <div class="form-element-wrapper rounded p-4 mt-3">
                <form class="row g-3 text-dark">
                  <div class="col-md-4">
                    <label for="inputfirstname" class="form-label"> First Name</label>
                   <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                  </div>
                  <div class="col-md-4">
                    <label for="inputlastname" class="form-label"> Last Name </label>
                   <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                  </div>
                  <div class="col-md-4">
                    <label for="inputusername" class="form-label">Username </label>
                   <div class="input-group">
                      <div class="input-group-text">@</div>
                        <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="Username" required/>
                      </div>
                   </div>
                 <div class="col-md-6">
                    <label for="inputCity" class="form-label"> City </label>
                   <input type="text" class="form-control" id="inputCity"/>
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
                    <label class="form-check-label" for="gridCheck">Agree to terms & conditions</label>
                   </div>
                  </div>
                  <div class="d-md-flex justify-content-center">
                    <button class="btn edit-btn" type="submit">Submit Form</button>
                  </div>
                 
                </form>
              </div>
    </React.Fragment>
  );
};

export default FormElement1;
