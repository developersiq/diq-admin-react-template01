import React from "react";
import MainLayout from "../../Component/MainLayout";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Modals.css";

const Modals = (props) => {
  return (
    <React.Fragment>
      <MainLayout>
        {/* Modal  */}

        <div className="row">
          <div className="col-md-6">
            <div className="main-colomn rounded">
              <div className="">
                <h2>Basic Modal</h2>
                <p>Basic Bootstrap 5 Modal</p>
                <button
                  type="button"
                  className="btn btn-primary model-button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Launch Modal
                </button>
              </div>
            </div>

            {/*  Modal */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header modal-header-edit">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum quisquam, commodi quo consectetur corporis
                    accusamus a perspiciatis nulla quod ea delectus corrupti
                    laboriosam minima veniam. Amet placeat quas eos
                    perspiciatis? Laboriosam labore quasi temporibus quisquam,
                    minus sint cupiditate ipsam earum magni dolorum hic, quae
                    aspernatur facilis nihil. Suscipit, pariatur ipsam! Animi,
                    consequuntur omnis sit rerum delectus officia quidem quis a.
                    Deleniti, commodi vitae. Laudantium unde iste illum
                    consequatur. Voluptatibus itaque veritatis explicabo minima
                    inventore eos, quo consequuntur, libero quidem quis quam rem
                    autem voluptate exercitationem reiciendis saepe! Iure, omnis
                    quae? Aliquid, totam expedita. Ipsa quos exercitationem quas
                    quaerat placeat vitae. Architecto omnis tenetur quas.
                    Corporis rerum ipsam omnis accusamus.
                  </div>
                  <div className="modal-footer modal-footer-edit">
                    <button
                      type="button"
                      className="btn btn-secondary model-close-btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn rounded model-button">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>

        {/* ============================================================ */}

        <div className="row">
          <div className="col-md-6">
            <div className="mt-3 main-colomn rounded">
              <h3>Vertically Centered</h3>
              <p>Use .modal-dialog-centered for vertical centered.</p>

              <button
                type="button"
                className="btn btn-primary model-button"
                data-bs-toggle="modal"
                data-bs-target="#myModal"
              >
                Open modal
              </button>
            </div>

            {/* <!-- The Modal --> */}
            <div className="modal fade" id="myModal">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header modal-header-edit">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer modal-footer-edit">
                    <button
                      type="button"
                      className="btn model-close-btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>

        {/* ======================== */}

        <div className="row">
          <div className="col-md-6">
            <div class="mt-3 main-colomn rounded">
              <h3>Remove Animation</h3>
              <p>Remove fade class to remove animation.</p>

              <button
                type="button"
                class="btn btn-primary model-button"
                data-bs-toggle="modal"
                data-bs-target="#myModal2"
              >
                Open modal
              </button>
            </div>

            {/* <!-- The Modal --> */}
            <div class="modal align-items-center" id="myModal2">
              <div class="modal-dialog">
                <div class="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div class="modal-header modal-header-edit">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div class="modal-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class="modal-footer modal-footer-edit">
                    <button
                      type="button"
                      class="btn model-close-btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>

        {/* ================================================== */}

        <div className="row">
          <div className="col-md-6">
            <div class="mt-3 main-colomn rounded">
              <h2>Modal Scroll Example</h2>
              <p>Click on the button to open the modal.</p>

              <button
                type="button"
                class="btn model-button"
                data-bs-toggle="modal"
                data-bs-target="#myModal3"
              >
                Open modal
              </button>
            </div>

            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal3">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div class="modal-header modal-header-edit">
                    <h4 class="modal-title">Modal Heading</h4>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal3"
                    ></button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div class="modal-body">
                    <h3>Some text to enable scrolling..</h3>
                    <p>
                      Some text to enable scrolling.. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                      Some text to enable scrolling.. Lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt
                      mollit anim id est laborum consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div class="modal-footer modal-footer-edit">
                    <button
                      type="button"
                      class="btn model-close-btn"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </MainLayout>
    </React.Fragment>
  );
};

export default Modals;
