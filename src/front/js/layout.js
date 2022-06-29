import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { LandingPage } from "./pages/landingpage";
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
import the404 from "../img/the404.png";
import { useState } from "react";
import { UpdatePassword } from "./pages/Updatepassword";
//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [is_teacher, setIs_teacher] = useState(localStorage.getItem("is_teacher"));
  const [emaillogged, setEmaillogged] = useState(localStorage.getItem("email"));

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
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/landingpage">
              <LandingPage />
            </Route>
            {/* <Route exact path="/Content/:user_id">
              <Content />
            </Route> */}
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/loginpage">
              <LoginPage setToken={setToken} setIs_teacher={setIs_teacher} setEmaillogged={setEmaillogged} />
            </Route>
            <Route exact path="/SignupPage">
              <SignupPage />
            </Route>
            <Route exact path="/ForgetPassword">
              <ForgetPassword />
            </Route>
            <Route exact path="/lounge">
              <Lounge />
            </Route>
            <Route exact path="/lesson">
              <Lesson />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/teacherpage">
              <Teacherpage />
            </Route>
            <Route exact path="/lessonworkspace">
              <Lessonworkspace />
            </Route>
            <Route exact path="/results">
              <Results />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route exact path="/edit_lesson">
              <Edit_Lesson />
            </Route>
            <Route exact path="/edit_profile">
              <Edit_Profile />
            </Route>
            <Route exact path="/updatepassword/:id">
              <UpdatePassword />
            </Route>
            <Route>
              <div className="">
                <img className="align-center" src={the404}></img>
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
