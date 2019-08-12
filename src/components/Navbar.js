import React from "react";
import { Link } from "react-router-dom";
// import logo from "../images/logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      //   <div className="Navbar">
      //     <div className="container-fluid">
      //       <Link className="Navbar__brand" to="/">
      //         <img className="Navbar__brand-logo" src={logo} alt="Logo" />
      //         <span className="font-weight-light">Plazi</span>
      //         <span className="font-weight-bold">Conf</span>
      //       </Link>
      //     </div>
      //   </div>
      <nav className="navbar navbar-expand-lg navbar-light navbar-bottom-bar">
        <Link className="navbar-brand" to="/">
          DATA GATE
        </Link>

        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <li className="nav-item">
            <Link className="nav-link active" to="/review">
              Review
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/request">
              Request
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/manage">
              Manage
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
