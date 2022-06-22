import React from "react";
import "./assets/css/Graph.css";
import "./assets/css/Variable.css";
import "./assets/css/Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Header from "./Header";
import {
  faSearch,
  faWallet,
  faPeopleGroup,
  faStore,
  faPlus,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import CanvasJSReact from "./assets/js/canvasjs.react";
import StoreMatrics from "./StoreMatrics";
import CompanyDetails from "./CompanyDetail";
import OrdersSummary from "./OrdersSummery";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Graph = (props) => {
  // Graph 1
  const options1 = {
    animationEnabled: true,

    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      title: "Sales (in USD)",
      prefix: "$",
    },
    data: [
      {
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color: "#ff5528",
        dataPoints: [
          { x: new Date(2003, 0), y: 200 },
          { x: new Date(2004, 0), y: 300 },
          { x: new Date(2005, 0), y: 600 },
          { x: new Date(2006, 0), y: 600 },
          { x: new Date(2007, 0), y: 200 },
          { x: new Date(2008, 0), y: 100 },
          { x: new Date(2009, 0), y: 200 },
          { x: new Date(2010, 0), y: 700 },
        ],
      },
    ],
  };


  // Graph 2
  const options2 = {
    animationEnabled: true,
    data: [
      {
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color: "#ff5528",
        dataPoints: [
          { x: new Date(2003, 0), y: 200 },
          { x: new Date(2004, 0), y: 300 },
          { x: new Date(2005, 0), y: 600 },
          { x: new Date(2008, 0), y: 100 },
          { x: new Date(2009, 0), y: 600 },
          { x: new Date(2010, 0), y: 700 },
        ],
      },
    ],
  };

  // Graph 3
  const options3 = {
    animationEnabled: true,

    axisX: {
      interval: 1,
    },
    axisY: {
      title: "Number of Days",
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        yValueFormatString: "#,### Units",
        xValueFormatString: "YYYY",
        type: "spline",
        color: "#ff5528",

        dataPoints: [
          { x: new Date(2012, 1, 1), y: 1352 },
          { x: new Date(2012, 2, 1), y: 1514 },
          { x: new Date(2012, 3, 1), y: 1321 },
          { x: new Date(2012, 4, 1), y: 1163 },
          { x: new Date(2012, 5, 1), y: 950 },
        ],
      },
    ],
  };

  return (
    <React.Fragment>
      {/* <!-- sidebar-wrapper  --> */}
      {/* <Header /> */}

      <div className="row">
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-pink rounded p-3">
            <div className="row">
              <div className="col-9">
                <h6>Revenue</h6>
                <h4>$7305</h4>
                <div className="d-flex align-items-center">
                  <small>$34 Since last week</small>
                </div>
              </div>

              <div className="col-3">
                <div className="text-end  p-2">
                  <FontAwesomeIcon
                    icon={faWallet}
                    className="icon-orange fa-2xl"
                  />
                </div>
              </div>
            </div>
            {/* <div id="linechartContainer_01"></div> */}
            <div className="chart_outer">
              <CanvasJSChart options={options1} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-pink rounded p-3">
            <div className="row">
              <div className="col-9">
                <h6>Total Customers</h6>
                <h4>7.8K</h4>
                <div className="d-flex align-items-center">
                  <i className="fa fa-caret-up pe-2 mt-1"></i>
                  <small>16% Since last week</small>
                </div>
                {/* <CanvasJSChart options = {options1} /> */}
              </div>
              <div className="col-3">
                <div className="text-end  p-2">
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="icon-orange fa-2xl"
                  />
                </div>
              </div>
            </div>
            {/* <div id="linechartContainer_02"></div> */}
            <div className="chart_outer">
              <CanvasJSChart options={options2} />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-pink rounded p-3">
            <div className="row">
              <div className="col-9">
                <h6>Store Visitors</h6>
                <h4>79K</h4>
                <div className="d-flex align-items-center">
                  <i className="fa fa-caret-up pe-2 mt-1"></i>
                  <small>15.4% Since last week</small>
                </div>
              </div>
              <div className="col-3">
                <div className="text-end  p-2">
                  <FontAwesomeIcon
                    icon={faStore}
                    className="icon-orange fa-2xl"
                  />
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options3} />
            </div>

            {/* <div id="linechartContainer_03"></div> */}
          </div>
        </div>
      </div>

      {/* Store Matrics Call Here */}
      <StoreMatrics />

      {/* <!-- Third row --> */}
      <div className="row mt-4">
        <div className="col-12 col-md-7 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>Transaction History</h6>
                <small>in last 30 days revenue</small>
              </div>
              <div className="col-6">
                {/* <!-- seacrh form start--> */}
                <div className="search">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="search-button">
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                </div>
                {/* <!-- search form end --> */}
              </div>
            </div>
            {/* <!-- table start --> */}
            <div className="table-responsive  mt-3">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th scope="col" width="10%"></th>
                    <th scope="col" width="50%">
                      Payment Name
                    </th>
                    <th scope="col" width="20%">
                      Date
                    </th>
                    <th scope="col" width="20%">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                        <div className="user-img-outer border rounded-circle">
                          <img src={require("./assets/images/product-3.webp")} />
                        </div>
                      {/* <img
                        className="img-fluid border rounded my-2"
                        src={require("./assets/images/user-img1.webp")}
                        alt="pic"
                      /> */}
                    </th>
                    <td>
                      <h6 className="mb-0">Payment from David Buckley</h6>
                      <small>Id #7865986</small>
                    </td>
                    <td>Jan 16, 2021</td>
                    <td>+763</td>
                  </tr>
                  <tr>
                    <th scope="row">
                    <div className="user-img-outer border rounded-circle">
                          <img src={require("./assets/images/product-3.webp")} />
                        </div>
                    </th>
                    <td>
                      <h6 className="mb-0">Payment from David Buckley</h6>
                      <small>Id #7865986</small>
                    </td>
                    <td>Jan 16, 2021</td>
                    <td>+763</td>
                  </tr>
                  <tr>
                    <th scope="row">
                    <div className="user-img-outer border rounded-circle">
                          <img src={require("./assets/images/product-3.webp")} />
                        </div>
                    </th>
                    <td>
                      <h6 className="mb-0">Payment from David Buckley</h6>
                      <small>Id #7865986</small>
                    </td>
                    <td>Jan 16, 2021</td>
                    <td>+763</td>
                  </tr>
                  <tr>
                    <th scope="row">
                    <span className="user-img-outer border rounded-circle">
                          <img src={require("./assets/images/product-3.webp")} />
                        </span>
                    </th>
                    <td>
                      <h6 className="mb-0">Payment from David Buckley</h6>
                      <small>Id #7865986</small>
                    </td>
                    <td>Jan 16, 2021</td>
                    <td>+763</td>
                  </tr>
                  {/* <tr>
                          <th scope="row">
                            <img
                              className="img-fluid border rounded my-2"
                              src={require("./assets/images/user-img1.webp")}
                            />
                          </th>
                          <td>
                            <h6 className="mb-0">Payment from David Buckley</h6>
                            <small>Id #7865986</small>
                          </td>
                          <td>Jan 16, 2021</td>
                          <td>+763</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="img-fluid border rounded my-2"
                              src={require("./assets/images/user-img1.webp")}
                            />
                          </th>
                          <td>
                            <h6 className="mb-0">Payment from David Buckley</h6>
                            <small>Id #7865986</small>
                          </td>
                          <td>Jan 16, 2021</td>
                          <td>+763</td>
                        </tr> */}
                </tbody>
              </table>
            </div>
            {/* <!-- table end --> */}
          </div>
        </div>

        {/* -----------wallet card start--------- */}
        <div className="col-12 col-md-5">
          <div className="bg-pink wallet position-relative rounded mb-4">
            <div className="position-relative content-wallet p-3 py-4">
              {/* <!-- wallet user --> */}
              <div className="row">
                <div className="card-user">
                  <div className="p-2 bg-white rounded-pill ">
                    <a href="#">
                      <img
                        className="rounded-circle user-profile-img"
                        src={require("./assets/images/user.jpg")}
                        alt="Sonia Shaw"
                      />
                      <strong className="media-body"> Sonia Shaw</strong>
                    </a>
                  </div>
                  <div className="plus-icon text-end">
                    <a href="#">
                      <FontAwesomeIcon
                        icon={faPlus}
                        className="add text-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* <!-- wallet balance --> */}
              <div className="row">
                <div className="wallet-balance py-4 text-white">
                  <div className="col-md-6">
                    <h5>Wallet Balance</h5>
                  </div>
                  <div className="col-md-4 text-end">
                    <h5>$2953</h5>
                  </div>
                </div>
              </div>
              {/* <!-- wallet amount --> */}
              <div className="row">
                <div className="wallet-amount justify-content-center">
                  <div className=" p-3 bg-white  user">
                    <div className="amount-status">
                      <h6>Received</h6>
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="add text-dark"
                      />

                      <i className="fa fa-angle-down angle-icon"></i>
                    </div>
                    <p className="amount-btn px-4 text-center rounded-pill text-white">
                      $98.23
                    </p>
                  </div>
                  <div className=" p-3 bg-white  user">
                    <div className="amount-status">
                      <h6>Spent</h6>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        className="add text-dark"
                      />

                      <i className="fa fa-angle-up angle-icon"></i>
                    </div>
                    <p className="amount-btn  px-4 text-center rounded-pill text-white">
                      $98.23
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- pending details --> */}

              <table className="table table-borderless mt-4 mb-4">
                <thead>
                  <tr>
                    <th>
                      <i className="fa fa-dot-circle"></i> Pending
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Netflix</td>
                    <td className="text-end">$13.85</td>
                  </tr>
                  <tr>
                    <td>Blue Host</td>
                    <td className="text-end">$54.17</td>
                  </tr>
                  <tr>
                    <td>Amzone Prime</td>
                    <td className="text-end">$24.10</td>
                  </tr>
                </tbody>
              </table>

              <div className="row">
                <div className="col-6">
                  <div className="amount-details">
                    <p className="amount-btn px-3 py-1 text-center rounded-pill text-white">
                      View Details
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="amount-details">
                    <p className="amount-btn px-3 py-1 text-center rounded-pill text-white">
                      Pay Now
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wallet-card position-absolute p-3 rounded"></div>
          </div>
        </div>
        {/* <!-- wallet card end --> */}
      </div>

      {/* Companyt Details Comnponent Call Here */}
      <CompanyDetails />

      {/* <!-- Order Summary Call Here --> */}
      <OrdersSummary />
    </React.Fragment>
  );
};

export default Graph;
