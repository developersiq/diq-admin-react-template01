import React from "react";
import CompanyDetails from "../../Component/CompanyDetail";
import MainLayout from "../../Component/MainLayout";



const Charts = (props) => {
  return (
    <React.Fragment>
        <MainLayout>
          <div className="mt-3">
            <h1>Charts</h1>
          </div>
      <CompanyDetails/>
      </MainLayout>
    </React.Fragment>
  );
};

export default Charts;