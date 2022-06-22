import React from "react";
// import  "./assets/SideMenu.js";

import "./assets/css/Variable.css";
import "./assets/css/Graph.css";


const OrdersSummary = (props) => {
    


  return (
    <React.Fragment>
      <div className="row">
              <div className="col-12 col-md-12 mb-5 graph-box">
                <div className="bg-pink rounded p-3">
                  <div className="row">
                    <div className="col-6">
                      <h6>Orders Summary</h6>
                      {/* <!-- <small><i className="fas fa-calendar"></i> in last 30 days revenue</small> --> */}
                    </div>
                  </div>
                  {/*  table start  */}
                  <div className="table-responsive mt-3">
                    <table className="table table-striped table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col" width="10%">
                            Order id
                          </th>
                          <th scope="col" width="20%">
                            Customer
                          </th>
                          <th scope="col" width="20%">
                            Product
                          </th>
                          <th scope="col" width="20%">
                            Date
                          </th>
                          <th scope="col" width="20%">
                            Amount
                          </th>
                          <th scope="col" width="10%">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">#897656</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />
                            <span>David Buckley</span>
                          </td>
                          <td>Laptop</td>
                          <td>Jan 16, 2021</td>
                          <td>$76.00</td>
                          <td>Pending</td>
                        </tr>
                        <tr>
                          <th scope="row">#858589</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />{" "}
                            <span>Pauline Bird</span>
                          </td>
                          <td>Camera</td>
                          <td>Jan 15, 2021</td>
                          <td>$65.00</td>
                          <td>Dispatched</td>
                        </tr>
                        <tr>
                          <th scope="row">#858589</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />{" "}
                            <span>Pauline Bird</span>
                          </td>
                          <td>Camera</td>
                          <td>Jan 15, 2021</td>
                          <td>$65.00</td>
                          <td>Dispatched</td>
                        </tr>
                        <tr>
                          <th scope="row">#858589</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />{" "}
                            <span>Pauline Bird</span>
                          </td>
                          <td>Camera</td>
                          <td>Jan 15, 2021</td>
                          <td>$65.00</td>
                          <td>Dispatched</td>
                        </tr>
                        <tr>
                          <th scope="row">#858589</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />{" "}
                            <span>Pauline Bird</span>
                          </td>
                          <td>Camera</td>
                          <td>Jan 15, 2021</td>
                          <td>$65.00</td>
                          <td>Dispatched</td>
                        </tr>
                        <tr>
                          <th scope="row">#858589</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />{" "}
                            <span>Pauline Bird</span>
                          </td>
                          <td>Camera</td>
                          <td>Jan 15, 2021</td>
                          <td>$65.00</td>
                          <td>Dispatched</td>
                        </tr>
                        <tr>
                          <th scope="row">#858589</th>
                          <td>
                            <img
                              className="img-fluid border rounded-circle float-start me-2"
                              width="30"
                              src={require("./assets/images/user-img1.webp")}
                            />{" "}
                            <span>Pauline Bird</span>
                          </td>
                          <td>Camera</td>
                          <td>Jan 15, 2021</td>
                          <td>$65.00</td>
                          <td>Dispatched</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <!-- table end --> */}
                </div>
              </div>
            </div>
    </React.Fragment>
  );
};

export default OrdersSummary;
