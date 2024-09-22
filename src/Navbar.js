import { useState } from "react";
import React from "react";
import "./Navbar.css"; // Create this CSS file for custom styles
// import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Textutils
          </a>
          <div className="mx-auto d-flex justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link active text-light" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown mx-3">
                <a
                  className="nav-link dropdown-toggle text-light"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  extra
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item " href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch mx-5">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.tooglemode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">dark</label>
</div>
<div className="form-check form-switch mx-5">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.blue}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">blue</label>
</div>
<div className="form-check form-switch mx-5">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.green}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">green</label>
</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
