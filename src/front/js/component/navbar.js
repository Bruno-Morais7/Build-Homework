import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import { useHistory } from "react-router-dom";

export const Navbar = ({ token, setToken, is_teacher, setIs_teacher }) => {
  const history = useHistory();

  const logoutFunction = (e) => {
    e.preventDefault();
    localStorage.clear();
    setToken("");
    setIs_teacher(false);
    history.push("/");
  };
  return (
    <nav className="navbar navbar-light container">
      <div className="container-fluid py-3">
        <Link to="/">
          <img
            className="img-fluid mx-auto d-block"
            src={logo}
            width={"250rem"}
          />
        </Link>
        <div className="ml-auto d-flex gap-3 flex-wrap align-items-center py-4">
          {token ? (
            <>
              <Link to="/lounge">
                <div className="btn_effect">
                  <i className="fa-solid fa-couch text-dark fs-2"></i>
                  <span className="btn_text">Lounge</span>
                </div>
              </Link>
              <Link to="/results">
                <div className="btn_effect">
                  <i className="fa-solid fa-magnifying-glass text-dark fs-2"></i>
                  <span className="btn_text">Search</span>
                </div>
              </Link>

              {is_teacher && (
                <Link to="/lessonworkspace">
                  <div className="btn_effect">
                    <i className="fa-solid fa-chalkboard-user text-dark fs-2"></i>{" "}
                    <span className="btn_text">Workspace</span>
                  </div>
                </Link>
              )}
              <Link to="/profile">
                <div className="btn_effect">
                  <i className="fa-solid fa-circle-user text-dark fs-2"></i>{" "}
                  <span className="btn_text">My Profile</span>
                </div>
              </Link>
              <Link to="#">
                <div className="btn_effect">
                  <i className="fa-solid fa-arrow-right-from-bracket text-dark fs-2"></i>
                  <span className="btn_text" onClick={logoutFunction}>
                    Logout
                  </span>
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link to="/SignupPage">
                <div className="btn_effect">
                  <i className="fa-solid fa-user-plus text-dark fs-2"></i>{" "}
                  <span className="btn_text">Signup</span>
                </div>
              </Link>
              <Link to="/LoginPage">
                <div className="btn_effect">
                  <i className="fa-solid fa-arrow-right-to-bracket fs-2 text-dark"></i>{" "}
                  <span className="btn_text">Login </span>{" "}
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
