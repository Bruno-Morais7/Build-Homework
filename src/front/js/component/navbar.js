import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = ({ token, setToken }) => {
  const history = useHistory();

  const logoutFunction = (e) => {
    e.preventDefault();
    localStorage.clear();
    setToken("");
    history.push("/");
  };

  return (
    <nav className="navbar navbar-light container-fluid col-10 border-bottom">
      <div className="container-fluid py-3">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand mb-0 h1 align-middle text-warning">
            20 Min Lesson{" "}
          </span>
        </Link>
        <div className="ml-auto d-flex gap-3">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
          <Link to="/landingpage">
            <button className="btn btn-success">Landing Page</button>
          </Link>

          {token ? (
            <Link to="#">
              <button onClick={logoutFunction} className="btn btn-success">
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link to="/LoginPage">
                <button className="btn btn-success">Login</button>
              </Link>
              <Link to="/SignupPage">
                <button className="btn btn-success">Signup</button>
              </Link>
            </>
          )}

          <Link to="/lounge">
            <button className="btn btn-danger">Lounge</button>
          </Link>
          <Link to="/lesson">
            <button className="btn btn-danger">Lesson</button>
          </Link>
          <Link to="/teacherpage">
            <button className="btn btn-danger">Teacher</button>
          </Link>
          <Link to="/lessonworkspace">
            <button className="btn btn-danger">Workspace</button>
          </Link>
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
