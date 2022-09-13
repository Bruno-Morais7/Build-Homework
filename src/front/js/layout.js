import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LoginPage } from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import { ForgetPassword } from "./pages/ForgetPassword";
import { Lounge } from "./pages/lounge";
import { Lesson } from "./pages/lesson";
import { Teacherpage } from "./pages/teacherpage";
import { Lessonworkspace } from "./pages/lessonworkspace";
import { Profile } from "./pages/profile";
import { Results } from "./pages/results";
import { Edit_Lesson } from "./pages/edit_lesson";
import { Edit_Profile } from "./pages/edit_profile";
import { useState } from "react";
import { UpdatePassword } from "./pages/Updatepassword";
import { Contactpage } from "./pages/Contactpage";
import { Forbidden } from "./pages/forbidden";
import the404 from "../img/the404.png";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [is_teacher, setIs_teacher] = useState(
    localStorage.getItem("is_teacher")
  );
  const [emaillogged, setEmaillogged] = useState(localStorage.getItem("email"));
  const loggedOut = localStorage.getItem("token") === null;
  const loggedInStudent = localStorage.getItem("is_teacher") === "false";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar
            token={token}
            setToken={setToken}
            is_teacher={is_teacher}
            setIs_teacher={setIs_teacher}
          />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/loginpage">
              <LoginPage
                setToken={setToken}
                setIs_teacher={setIs_teacher}
                setEmaillogged={setEmaillogged}
              />
            </Route>
            <Route exact path="/SignupPage">
              <SignupPage />
            </Route>
            <Route exact path="/ForgetPassword">
              <ForgetPassword />
            </Route>
            <Route exact path="/contactpage">
              <Contactpage />
            </Route>
            <Route exact path="/forbidden">
              <Forbidden />
            </Route>
            <Route
              exact
              path="/lounge"
              render={() =>
                loggedOut ? <Redirect to="/forbidden" /> : <Lounge />
              }
            />
            <Route
              exact
              path="/lesson"
              render={() =>
                loggedOut ? <Redirect to="/forbidden" /> : <Lesson />
              }
            />
            <Route
              exact
              path="/profile"
              render={() =>
                loggedOut ? <Redirect to="/forbidden" /> : <Profile />
              }
            />
            <Route
              exact
              path="/teacherpage"
              render={() =>
                loggedOut ? <Redirect to="/forbidden" /> : <Teacherpage />
              }
            />
            <Route
              exact
              path="/results"
              render={() =>
                loggedOut ? <Redirect to="/forbidden" /> : <Results />
              }
            />
            <Route
              exact
              path="/lessonworkspace"
              render={() => <Lessonworkspace />}
              // render={() =>
              //   loggedOut ? (
              //     <Redirect to="/forbidden" />
              //   ) : loggedInStudent ? (
              //     <Redirect to="/forbidden" />
              //   ) : (
              //     <Lessonworkspace />
              //   )
              // }
            />
            <Route
              exact
              path="/edit_lesson"
              render={() =>
                loggedOut ? (
                  <Redirect to="/forbidden" />
                ) : loggedInStudent ? (
                  <Redirect to="/forbidden" />
                ) : (
                  <Edit_Lesson />
                )
              }
            />
            <Route
              exact
              path="/edit_profile"
              render={() =>
                loggedOut ? <Redirect to="/forbidden" /> : <Edit_Profile />
              }
            />
            
            <Route
              exact
              path="/updatepassword:id"
              render={() =>
                loggedOut ? <UpdatePassword /> : <Redirect to="/forbidden" />
              }
            />

            <Route>
              <div className="container-fluid col-8">
                <img className="mx-auto d-block my-5" src={the404}></img>
              </div>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
