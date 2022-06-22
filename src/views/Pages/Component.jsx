import React from "react";
import MainLayout from "../../Component/MainLayout";
import "../../Component/assets/css/Pages.css";
import "../../Component/assets/css/Variable.css";

import Heading from "../Display/Heading";

const Component = (props) => {
  return (
    <React.Fragment>
      <MainLayout>
          {/* <h1 className="mt-3">Components</h1> */}


        {/* CARD SECTION */}
        <section>
          <h3 className="heading mt-3">Card</h3>
          <div className="row">
            <div className="col-sm-4 mb-3">
              <div className="card card-primary">
                <img
                  src={require("../../Component/assets/images/image-1.jpg")}
                  alt="pic"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary rounded">
                    Go somewhere
                  </a>
                  <a href="#" className="btn btn-secondary rounded mx-2">
                    Cancel
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card card-warning">
              <img
                  src={require("../../Component/assets/images/image-2.jpg")}
                  alt="pic"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-warning rounded ">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-4 mb-3">
              <div className="card card-sucess rounded">
              <img
                  src={require("../../Component/assets/images/image-3.jpg")}
                  alt="pic"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-success rounded">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accodion Section */}
        <section>
          <h3 className="heading mt-3">Accordion</h3>
          <div className="accordion shadow p-4 rounded" id="accordionExample">
            <h5>Basic Accordion </h5>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It
                  is shown by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It
                  is hidden by default, until the collapse plugin adds the
                  appropriate classes that we use to style each element. These
                  classes control the overall appearance, as well as the showing
                  and hiding via CSS transitions. You can modify any of this
                  with custom CSS or overriding our default variables. It's also
                  worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit
                  overflow.
                </div>
              </div>
            </div>
          </div>

          <div
            className="accordion accordion-flush shadow p-4 rounded mt-5"
            id="accordionFlushExample"
          >
            <h5>Flush Accordion </h5>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Accordion Item #1
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section>
          <h3 className="heading mt-3">Buttons</h3>
          <div className="p-4 mt-3 rounded shadow">
            <button type="button" className="btn m-2 btn-primary">
              Primary
            </button>
            <button type="button" className="btn m-2 btn-secondary">
              Secondary
            </button>
            <button type="button" className="btn m-2 btn-success">
              Success
            </button>
            <button type="button" className="btn m-2 btn-danger">
              Danger
            </button>
            <button type="button" className="btn m-2 btn-warning">
              Warning
            </button>
            <button type="button" className="btn m-2 btn-info">
              Info
            </button>

            <button type="button" className="btn m-2 btn-dark">
              Dark
            </button>
            <button type="button" className="btn m-2 btn-outline-primary">
              Primary
            </button>
            <button type="button" className="btn m-2 btn-outline-secondary">
              Secondary
            </button>
            <button type="button" className="btn m-2 btn-outline-success">
              Success
            </button>
            <button type="button" className="btn m-2 btn-outline-danger">
              Danger
            </button>
            <button type="button" className="btn m-2 btn-outline-warning">
              Warning
            </button>
            <button type="button" className="btn m-2 btn-outline-info">
              Info
            </button>
            <button type="button" className="btn m-2 btn-outline-dark">
              Dark
            </button>
          </div>
        </section>

        {/* Heading Section */}
        <section>
          <Heading />
        </section>
      </MainLayout>
    </React.Fragment>
  );
};

export default Component;
