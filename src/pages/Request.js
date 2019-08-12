import React from "react";
import { Link } from "react-router-dom";

function Request() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <h1>Requests</h1>
        </div>
        <div className="row">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                ALL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                PENDING
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                APPROVED
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DENIED
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div class="col">
            <div className="alert alert-success" role="alert">
              PENDING REQUESTS
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">DATE</th>
                  <th scope="col">REASON</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2017/09/21</td>
                  <td>Data science algorithms</td>
                  <td>
                    <span className="badge badge-dark">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>2017/09/22</td>
                  <td>Email Blanst</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                </tr>
                <tr>
                  <td>2017/09/23</td>
                  <td>Investigation</td>
                  <td>
                    <span className="badge badge-danger">Denied</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      );
    </React.Fragment>
  );
}

export default Request;
