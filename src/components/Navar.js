import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navar(props) {
  const location = useLocation()
  const { title, changeMode, mode } = props;
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode === "light"? "light" : "dark"} bg-${mode === "light"? "light" : "dark"}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location.pathname === "/home"? "active": ""}`}
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"? "active": ""}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onClick={changeMode}
                  />
                </div>
        </div>
      </nav>
    </>
  );
}

export default Navar;
