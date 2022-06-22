import React from "react";
import Table from "../Component/Table";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import MainLayout from "./../Component/MainLayout";

const TableList = (Props) => {
  return (
    <React.Fragment>
      <MainLayout>
        <Table />
      </MainLayout>
    </React.Fragment>
  );
};

export default TableList;
