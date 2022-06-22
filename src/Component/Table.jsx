import React from "react";
import "../Component/assets/css/Variable.css";
import "../Component/assets/css/Table.css";

const Table = (Props) => {
  return (
    <React.Fragment>
      {/* Table -1  */}
      <div className="table1 rounded p-3 mb-4 mt-4">
        <h3>List Design</h3>
        <div className="table-responsive">
          <table class="table">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">David</td>
                <td>Buckley</td>
                <td>davil@gmail.com</td>
                <td>England</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Pauline</td>
                <td>Bird</td>
                <td>pauling.bird@gmail.com</td>
                <td>Lapan</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Ralph</td>
                <td>Alva</td>
                <td>ralph.alva@gmail.com</td>
                <td>USA</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">Cherry</td>
                <td>Seitz</td>
                <td>cherry.seitz@gmail.com</td>
                <td>Brazil</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Kelly</td>
                <td>Costanzo</td>
                <td>kelly@gmail.com</td>
                <td>Netherland</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">James</td>
                <td>Caviness</td>
                <td>james@gmail.com</td>
                <td>Russia</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">David</td>
                <td>Alva</td>
                <td>david@gmail.com</td>
                <td>South Africa</td>
                <td>Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table -2  */}
      <div className="table2 rounded p-3 mb-4">
        <h3>List Design</h3>
        <div className="table-responsive">
          <table class="table  table-hover">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">David</td>
                <td>Buckley</td>
                <td>davil@gmail.com</td>
                <td>England</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Pauline</td>
                <td>Bird</td>
                <td>pauling.bird@gmail.com</td>
                <td>Lapan</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Ralph</td>
                <td>Alva</td>
                <td>ralph.alva@gmail.com</td>
                <td>USA</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">Cherry</td>
                <td>Seitz</td>
                <td>cherry.seitz@gmail.com</td>
                <td>Brazil</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Kelly</td>
                <td>Costanzo</td>
                <td>kelly@gmail.com</td>
                <td>Netherland</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">James</td>
                <td>Caviness</td>
                <td>james@gmail.com</td>
                <td>Russia</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">David</td>
                <td>Alva</td>
                <td>david@gmail.com</td>
                <td>South Africa</td>
                <td>Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table -3  */}
      <div className="table3 rounded p-3 mb-4 text-white">
        <h3>List Design</h3>
        <div className="table-responsive">
          <table class="table table-borderless">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="text-white">
              <tr>
                <td scope="row">David</td>
                <td>Buckley</td>
                <td>davil@gmail.com</td>
                <td>England</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Pauline</td>
                <td>Bird</td>
                <td>pauling.bird@gmail.com</td>
                <td>Lapan</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Ralph</td>
                <td>Alva</td>
                <td>ralph.alva@gmail.com</td>
                <td>USA</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">Cherry</td>
                <td>Seitz</td>
                <td>cherry.seitz@gmail.com</td>
                <td>Brazil</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Kelly</td>
                <td>Costanzo</td>
                <td>kelly@gmail.com</td>
                <td>Netherland</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">James</td>
                <td>Caviness</td>
                <td>james@gmail.com</td>
                <td>Russia</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">David</td>
                <td>Alva</td>
                <td>david@gmail.com</td>
                <td>South Africa</td>
                <td>Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Table -4  */}
      {/* <div className="table4 rounded p-3">
        <h3>List Design</h3>
        <div className="table-responsive">
          <table class="table">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">David</td>
                <td>Buckley</td>
                <td>davil@gmail.com</td>
                <td>England</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Pauline</td>
                <td>Bird</td>
                <td>pauling.bird@gmail.com</td>
                <td>Lapan</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Ralph</td>
                <td>Alva</td>
                <td>ralph.alva@gmail.com</td>
                <td>USA</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">Cherry</td>
                <td>Seitz</td>
                <td>cherry.seitz@gmail.com</td>
                <td>Brazil</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Kelly</td>
                <td>Costanzo</td>
                <td>kelly@gmail.com</td>
                <td>Netherland</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">James</td>
                <td>Caviness</td>
                <td>james@gmail.com</td>
                <td>Russia</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">David</td>
                <td>Alva</td>
                <td>david@gmail.com</td>
                <td>South Africa</td>
                <td>Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      {/* Table - 5  */}
      <div className="table5 rounded p-3 mb-4">
        <h3>List Design</h3>
        <div className="table-responsive">
          <table class="table table-borderless table-striped">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Country</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">David</td>
                <td>Buckley</td>
                <td>davil@gmail.com</td>
                <td>England</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Pauline</td>
                <td>Bird</td>
                <td>pauling.bird@gmail.com</td>
                <td>Lapan</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Ralph</td>
                <td>Alva</td>
                <td>ralph.alva@gmail.com</td>
                <td>USA</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">Cherry</td>
                <td>Seitz</td>
                <td>cherry.seitz@gmail.com</td>
                <td>Brazil</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">Kelly</td>
                <td>Costanzo</td>
                <td>kelly@gmail.com</td>
                <td>Netherland</td>
                <td>Inactive</td>
              </tr>
              <tr>
                <td scope="row">James</td>
                <td>Caviness</td>
                <td>james@gmail.com</td>
                <td>Russia</td>
                <td>Active</td>
              </tr>
              <tr>
                <td scope="row">David</td>
                <td>Alva</td>
                <td>david@gmail.com</td>
                <td>South Africa</td>
                <td>Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Table;
