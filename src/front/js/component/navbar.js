import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light container-fluid col-10 border-bottom">
      <div className="container-fluid py-3">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand h1 align-middle">Build HomeWork</span>
        </Link>
        <div className="d-flex gap-2">
          <button className="btn btn-light" id="navbutton">
            Login
          </button>
          <button className="btn btn-light" id="navbutton">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};
