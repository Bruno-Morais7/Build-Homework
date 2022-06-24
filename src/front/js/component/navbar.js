import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";

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
        <Link to="/" /*style={{ textDecoration: "none" }}*/>
          {/* <span className="navbar-brand mb-0 fs-3 fw-bold p-2 align-middle text-dark"> */}
          <img
            className="img-fluid mx-auto d-block"
            src={logo}
            width={"250rem"}
          />
          {/* Teach<span className="text-warning">&</span>Learn
          </span> */}
        </Link>
        <div className="ml-auto d-flex gap-2 d-flex flex-wrap align-items-center">
          {/* <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link> */}
          <Link to="/lounge">
            <div className="btn_effect">
              <i className="fa-solid fa-couch text-dark fs-2"></i>
              <span className="btn_text">Lounge</span>
            </div>
          </Link>
          <Link to="/lessonworkspace">
            <div className="btn_effect">
              <i className="fa-solid fa-chalkboard-user text-dark fs-2"></i>{" "}
              <span className="btn_text">Workspace</span>
            </div>
          </Link>
          {token ? (
            <Link to="#">
              <div className="btn_effect">
                <i className="fa-solid fa-arrow-right-to-bracket fs-2 text-dark"></i>{" "}
                <span className="btn_text" onClick={logoutFunction}>
                  Logout
                </span>
                <i className="fa-solid fa-arrow-right-from-bracket text-dark fs-2"></i>{" "}
              </div>
            </Link>
          ) : (
            <>
              <Link to="/LoginPage">
                <div className="btn_effect">
                  <i className="fa-solid fa-arrow-right-to-bracket fs-2 text-dark"></i>{" "}
                  <span className="btn_text">Login </span>{" "}
                  <i className="fa-solid fa-arrow-right-from-bracket text-dark fs-2"></i>{" "}
                </div>
              </Link>
              <Link to="/SignupPage">
                <div className="btn_effect">
                  <i className="fa-solid fa-user-plus text-dark fs-2"></i>{" "}
                  <span className="btn_text">Signup</span>
                </div>
              </Link>
              <Link to="/profile">
                <div className="btn_effect">
                  <i className="fa-solid fa-circle-user text-dark fs-2"></i>{" "}
                  <span className="btn_text">My Profile</span>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
