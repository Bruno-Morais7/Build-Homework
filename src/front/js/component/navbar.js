import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light container-fluid col-10 border-bottom">
      <div className="container-fluid py-3">
        <Link to="/" /*style={{ textDecoration: "none" }}*/>
          <span className="navbar-brand mb-0 fs-3 fw-bold p-2 align-middle text-warning">
          Teach&Learn
          </span>
        </Link>
        <div className="ml-auto d-flex gap-3 d-flex flex-wrap">
          {/* <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link> */}
          <Link to="/lounge">
            <button className="btn btn-dark">Lounge</button>
          </Link>
          <Link to="/lesson">
            <button className="btn btn-dark">Lesson</button>
          </Link>
          <Link to="/teacherpage">
            <button className="btn btn-dark">Teacher</button>
          </Link>
          <Link to="/lessonworkspace">
            <button className="btn btn-dark">Workspace</button>
          </Link>
          <Link to="/LoginPage">
            <button className="btn btn-success" id="navbutton">Login</button>
          </Link>
          <Link to="/SignupPage">
            <button className="btn btn-success" id="navbutton">Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
