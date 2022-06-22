import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import TopPanel from "./TopPanel";
import LeftPanel from "./LeftPanel";

const MainLayout=({children})=> {
    return (
      <React.Fragment>
        <div className="page-wrapper dark-theme toggled">
          <LeftPanel />
          <main className="page-content">
            <div className="container-fluid">
              <TopPanel />
              {children}
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
  
  export default MainLayout;