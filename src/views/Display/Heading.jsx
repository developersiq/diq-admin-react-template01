import React from "react";
import "../../Component/assets/css/Variable.css";
import "../../Component/assets/css/Heading.css";

const Heading = (props) => {
  return (
    <React.Fragment>
      {/* About Section */}
      <section>
        <div className="fs-4 mt-3 mb-3">
          <h2 className="heading">Headings</h2>
        </div>
        <div className="p-2 rounded display-wrapper">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
        </div>

        <div className="fs-4 mt-3 mb-3">
          <h2 className="heading">Display Headings</h2>
        </div>
        <div className="p-2 rounded display-wrapper">
          <h1 className="display-1">Display 1</h1>
          <h2 className="display-2">Display 2</h2>
          <h3 className="display-3">Display 3</h3>
          <h4 className="display-4">Display 4</h4>
          <h5 className="display-5">Display 5</h5>
          <h6 className="display-6">Display 6</h6>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Heading;
