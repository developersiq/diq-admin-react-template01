import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";

const BlankLayout=({children})=> {
    return (
      <React.Fragment>
        <div className="page-wrapper dark-theme toggled">
              {children}
        </div>
      </React.Fragment>
    );
  }
  
  export default BlankLayout;