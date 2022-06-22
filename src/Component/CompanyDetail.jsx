import React from "react";
// import  "./assets/SideMenu.js";
import "./assets/css/Variable.css";
import "./assets/css/Graph.css";
import CanvasJSReact from "./assets/js/canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CompanyDetails = (props) => {
    
  // Graph 5
  const options5 = {
    animationEnabled: true,

    axisX: {
      gridThickness: 0,
      tickLength: 2,
      valueFormatString: "MMM",
      lineThickness: 0.2,
    },
    axisY: {
      gridThickness: 0,
      tickLength: 2,
      valueFormatString: "0.#",
      lineThickness: 0.2,
    },
    animationEnabled: true,
    data: [
      {
        // yValueFormatString: "#,### Units",
        type: "splineArea",
        color: "#ff5528",
        markerType: "none",
        fillOpacity: 0.3,

        dataPoints: [
          { x: new Date(2000, 0), y: 0 },
          { x: new Date(2000, 2), y: -10 },
          { x: new Date(2000, 3), y: 20 },
          { x: new Date(2000, 4), y: -30 },
          { x: new Date(2000, 5), y: 40 },
          { x: new Date(2000, 6), y: -50 },
        ],
      },
    ],
  };

  // Graph 6
  const options6 = {
    animationEnabled: true,
    axisX: {
      gridThickness: 0,
      tickLength: 2,
      valueFormatString: "MMM",
      lineThickness: 0.2,
    },
    axisY: {
      gridThickness: 0,
      tickLength: 2,
      valueFormatString: "0.#",
      lineThickness: 0.2,
    },
    animationEnabled: true,
    data: [
      {
        // yValueFormatString: "#,### Units",
        type: "splineArea",
        color: "#ff5528",
        markerType: "none",
        fillOpacity: 0.3,

        dataPoints: [
          { x: new Date(2000, 0), y: 0 },
          { x: new Date(2000, 2), y: 80 },
          { x: new Date(2000, 3), y: 20 },
          { x: new Date(2000, 4), y: 70 },
          { x: new Date(2000, 5), y: 90 },
          { x: new Date(2000, 6), y: 20 },
          { x: new Date(2000, 7), y: 80 },
        ],
      },
    ],
  };

  // Graph 7
  const options7 = {
    animationEnabled: true,

    axisX: {
      gridThickness: 0,
      tickLength: 2,
      valueFormatString: "MMM",
      lineThickness: 0.2,
    },
    axisY: {
      gridThickness: 0,
      tickLength: 2,
      valueFormatString: "0.#",
      lineThickness: 0.2,
    },
    animationEnabled: true,
    data: [
      {
        // yValueFormatString: "#,### Units",
        type: "splineArea",
        color: "#ff5528",
        markerType: "none",
        fillOpacity: 0.3,

        dataPoints: [
          { x: new Date(2000, 0), y: 0 },
          { x: new Date(2000, 2), y: 4 },
          { x: new Date(2000, 4), y: 7 },
          { x: new Date(2000, 5), y: 10 },
          { x: new Date(2000, 6), y: 20 },
          { x: new Date(2000, 7), y: 40 },
        ],
      },
    ],
  };

  // Graph 8
  const options8 = {
    animationEnabled: true,

    data: [
      {
        type: "doughnut",
        showInLegend: true,
        // startAngle: 60,
        // innerRadius: 60,
        // indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          { y: 25, label: "Kids", name: "Kids", color: "#3b2231" },
          { y: 10, label: "Women", name: "Women", color: "#fff9f6" },
          { y: 30, label: "Men", name: "Men", color: "#fdd5c7" },
          { y: 12, label: "Furniture", name: "Furniture", color: "#ff5528" },
        ],
      },
    ],
  };

  // Graph 9
  const options9 = {
    zoomEnabled: true,
    panEnabled: true,
    data: [
      {
        type: "column",
        color: "000",
        dataPoints: [
          { x: 1, y: 10 },
          { x: 2, y: 15 },
          { x: 3, y: 25 },
          { x: 4, y: 30 },
          { x: 5, y: 28 },
          { x: 6, y: 10 },
          { x: 7, y: 15 },
          { x: 8, y: 25 },
          { x: 9, y: 30 },
          { x: 10, y: 28 },
          { x: 11, y: 10 },
          { x: 12, y: 15 },
          { x: 13, y: 25 },
          { x: 14, y: 30 },
          { x: 15, y: 28 },
          { x: 16, y: 10 },
          { x: 17, y: 15 },
          { x: 20, y: 25 },
          { x: 21, y: 30 },
          { x: 25, y: 28 },
          { x: 26, y: 10 },
          { x: 27, y: 15 },
          { x: 28, y: 25 },
          { x: 30, y: 30 },
          { x: 40, y: 28 },
        ],
      },
    ],
  };

  // Graph 10
  const options10 = {
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        // startAngle: 60,
        // innerRadius: 60,
        // indexLabelFontSize: 17,
        indexLabel: "{label} - #percent%",
        toolTipContent: "<b>{label}:</b> {y} (#percent%)",
        dataPoints: [
          {
            x: 10,
            y: 289.42,
            label: "Last Week",
            name: "Last Week",
            color: "#3b2231",
          },
          {
            x: 20,
            y: 856.14,
            label: "Last Month",
            name: "Last Month",
            color: "#ff5528",
          },
          {
            x: 30,
            y: 987.25,
            label: "Last Year",
            name: "Last Year",
            color: "#fdd5c7",
          },
        ],
      },
    ],
  };

  return (
    <React.Fragment>
      {/* <!-- fourth row --> */}
      <div className="row">
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>Bounce Rate</h6>
                <h4>48.32%</h4>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <p className="mb-0 small">+12.34 Increase</p>
                  <small> From Last Week</small>
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options5} />
            </div>

            {/* <div id="linechartContainer_09"></div> */}
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>Pageviews</h6>
                <h4>52.64%</h4>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <p className="mb-0 small">+12.34 Increase</p>
                  <small> From Last Week</small>
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options6} />
            </div>

            {/* <div id="linechartContainer_010"></div> */}
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>New Sessions</h6>
                <h4>68.23%</h4>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <p className="mb-0 small">+12.34 Increase</p>
                  <small> From Last Week</small>
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options7} />
            </div>

            <div id="linechartContainer_011"></div>
          </div>
        </div>
      </div>

      {/* <!-- fifth row --> */}
      <div className="row">
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>Top Categories</h6>
                <h4>80.23%</h4>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <p className="mb-0 small">+12.34 Increase</p>
                  <small> From Last Week</small>
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options8} />
            </div>

            {/* <div id="doughnutchartContainer_012"></div> */}
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>Visitors</h6>
                <h4>
                  43,540{" "}
                  <small className="text-greylight">
                    4.4 <i className="fas fa-arrow-up"></i>
                  </small>
                </h4>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <p className="mb-0 small">+12.34 Increase</p>
                  <small> From Last Week</small>
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options9} />
            </div>

            {/* <div id="chartContainer_013"></div> */}
          </div>
        </div>
        <div className="col-12 col-md-4 mb-4 graph-box">
          <div className="bg-white rounded p-3">
            <div className="row">
              <div className="col-6">
                <h6>Sales Overiew</h6>
                <h4>68.23%</h4>
              </div>
              <div className="col-6">
                <div className="text-end">
                  <p className="mb-0 small">+12.34 Increase</p>
                  <small> From Last Week</small>
                </div>
              </div>
            </div>
            <div className="chart_outer">
              <CanvasJSChart options={options10} />
            </div>
            {/* <div id="chartContainer_014"></div> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CompanyDetails;
