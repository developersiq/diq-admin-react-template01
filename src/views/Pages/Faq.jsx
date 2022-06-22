import React from "react";
import MainLayout from "../../Component/MainLayout";
import "../../Component/assets/css/Faq.css";
import "../../Component/assets/css/Variable.css";

const Faq = (props) => {
  return (
    <React.Fragment>
      <MainLayout>
        <section>
          <h1>FAQ</h1>
          <div className="main-accordion pt-1 pb-1">
          <div
            class="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div class="accordion-item main-accordion">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed collapse-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <h6 className="faq-question"> A simple question?</h6>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    <strong>
                      <u>Absolutely!</u>
                    </strong>
                    We work with top payment companies which guarantees your
                    safety and security. All billing information is stored on
                    our payment processing partner.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item main-accordion">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed collapse-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <h6 className="faq-question">A question that is longer then the previous one?</h6>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse collapse-button"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    <strong>
                      <u>Yes, it is possible!</u>
                    </strong>{" "}
                    You can cancel your subscription anytime in your account.
                    Once the subscription is cancelled, you will not be charged
                    next month.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item main-accordion">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed collapse-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <h6 className="faq-question"> A simple question?</h6>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    Currently, we only offer monthly subscription. You can
                    upgrade or cancel your monthly account at any time with no
                    further obligation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>

          
        </section>
      </MainLayout>
    </React.Fragment>
  );
};

export default Faq;
