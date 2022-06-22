import React from "react";
// import  "./assets/SideMenu.js";

import "./assets/css/Variable.css";
import "./assets/css/Graph.css";
import CanvasJSReact from "./assets/js/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const StoreMatrics = (props) => {

     // Graph 4
  const options4 = {
    data: [
      {
        type: "column",
        type: "column",
        showInLegend: true,
        color: "#000",
        legendText: "Total Sale",
        dataPoints: [
          { x: 1, y: 6, label: "Feb" },
          { x: 2, y: 2, label: "Mar" },
          { x: 3, y: 5, label: "Apr" },
          { x: 4, y: 7, label: "Jun" },
          { x: 5, y: 1, label: "Jul" },
          { x: 6, y: 5, label: "Aug" },
          { x: 7, y: 4, label: "Sep" },
          { x: 8, y: 2, label: "Oct" },
          { x: 9, y: 2, label: "Nav" },
        ],
      },
      {
        type: "column",
        showInLegend: true,
        color: "#ff5528",
        legendText: "Customers",
        axisYIndex: 1,
        dataPoints: [
          { x: 1, y: 70 },
          { x: 2, y: 45 },
          { x: 3, y: 56 },
          { x: 4, y: 77 },
          { x: 5, y: 58 },
          { x: 6, y: 72 },
          { x: 7, y: 58 },
          { x: 8, y: 26 },
          { x: 9, y: 18 },
        ],
      },
      {
        type: "column",
        showInLegend: true,
        color: "#bdbaba",
        legendText: "Total Visitores",
        axisYIndex: 1,
        dataPoints: [
          { x: 1, y: 70 },
          { x: 2, y: 45 },
          { x: 3, y: 56 },
          { x: 4, y: 77 },
          { x: 5, y: 58 },
          { x: 6, y: 72 },
          { x: 7, y: 58 },
          { x: 8, y: 26 },
          { x: 9, y: 18 },
        ],
      },
    ],
  };



  return (
    <React.Fragment>
       {/* <!-- second row --> */}
       <div className="row">
              <div className="col-12 col-md-6 mb-6 graph-box">
                <div className="bg-pink rounded p-3">
                  <div className="row">
                    <div className="col-12">
                      <h6>Store Metrics</h6>
                      <small>
                        <i className="fas fa-calendar"></i> in last 30 days
                        revenue
                      </small>
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-4">
                      <h6>Revenue</h6>
                      <h4>$7305</h4>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-caret-up pe-2 mt-1"></i>
                        <small>$34 Since last week</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <h6>Revenue</h6>
                      <h4>$7305</h4>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-caret-up pe-2 mt-1"></i>
                        <small>$34 Since last week</small>
                      </div>
                    </div>
                    <div className="col-4">
                      <h6>Revenue</h6>
                      <h4>$7305</h4>
                      <div className="d-flex align-items-center">
                        <i className="fa fa-caret-up pe-2 mt-1"></i>
                        <small>$34 Since last week</small>
                      </div>
                    </div>
                  </div>
                  {/* <!-- bar graph start --> */}
                  <div className="chart_outer1">
                    <CanvasJSChart options={options4} />
                  </div>

                  {/* <div id="chartContainer_04"></div> */}
                  {/* <!-- bar graph end --> */}
                </div>
              </div>
              <div className="col-12 col-md-6 mb-6 top-pro-box">
                <div className="bg-white rounded py-3 pb-0">
                  <div className="row">
                    <div className="col-12">
                      <h6>Store Metrics</h6>
                      <small>
                        <i className="fas fa-calendar me-2"></i> in last 30 days
                        revenue
                      </small>
                    </div>
                    <div className="col-12 pro-graph-box mb-4">
                      <div className="row border border-grey bg-white rounded m-0 align-items-center">
                        <div className="col-3 col-md-3">
                          <div className="img-outer border rounded">
                            <img src={require("./assets/images/product-1.webp")}/>
                          </div>
                        </div>
                        <div className="col-3 col-md-3">
                          <p className="mb-0">
                            <b>Headphone</b>
                          </p>
                          <small>$24.00</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">$2140.00</h6>
                          <small>345 Sales</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <div id="linechartContainer_05"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pro-graph-box mb-4">
                      <div className="row border border-grey bg-white rounded m-0 align-items-center">
                        <div className="col-3 col-md-3">
                        <div className="img-outer border rounded">
                            <img src={require("./assets/images/product-2.webp")}/>
                          </div>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">
                            <b>Soes</b>
                          </h6>
                          <small>$59.00</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">$3570.00</h6>
                          <small>148 Sales</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <div id="linechartContainer_06"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pro-graph-box mb-4">
                      <div className="row border border-grey bg-white rounded m-0 align-items-center">
                        <div className="col-3 col-md-3">
                        <div className="img-outer border rounded">
                            <img src={require("./assets/images/product-3.webp")} />
                          </div>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">
                            <b>Watch</b>
                          </h6>
                          <small>$29.00</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">$3650.00</h6>
                          <small>122 Sales</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <div id="linechartContainer_07"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-12 pro-graph-box">
                      <div className="row border border-grey bg-white rounded m-0 align-items-center">
                        <div className="col-3 col-md-3">
                        <div className="img-outer border rounded">
                            <img src={require("./assets/images/product-4.webp")}/>
                          </div>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">
                            <b>Laptop</b>
                          </h6>
                          <small>$50.00</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <h6 className="mb-0">$3150.00</h6>
                          <small>129 Sales</small>
                        </div>
                        <div className="col-3 col-md-3">
                          <div id="linechartContainer_08"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </React.Fragment>
  );
};

export default StoreMatrics;
