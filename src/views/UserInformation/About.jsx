import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Information.css";

const About = (props) => {
  return (
    <React.Fragment>
      {/* About Section */}
      <section>
        <div className="fs-4 mt-5 mb-3">
          <strong className="heading">About</strong>
        </div>
        <div className="p-4 rounded about">
          <p className="lead">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or- less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
