import React from "react";
import MainLayout from "../../Component/MainLayout";



const Error = (props) => {
  return (
    <React.Fragment>
        <MainLayout>
      <div className="text-center mt-5">
          <h1>Error Not Found</h1>
          <h1 className="text-danger fw-bold display-1">404 !</h1>
      </div>
      </MainLayout>
    </React.Fragment>
  );
};

export default Error;