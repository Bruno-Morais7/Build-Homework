import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

import { Context } from "../store/appContext";

export const SignupPage = () => {
  const { store, actions } = useContext(Context);

  const URLbase = "";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [surnames, setSurnames] = useState();
  const [teacher, setTeacher] = useState();
  const [funinfo, setFuninfo] = useState();
  const [subjects, setSubjects] = useState();
  const [whyyouteach, setWhyyouteach] = useState();
  const [yearsexperience, SetYearsexperience] = useState();
  const [signupteacher, setSignupteacher] = useState(false);

  const onSubmitClicked = () => {
    console.log(" click and submit ");

    if (email && password && repeatPassword) {
      if (password === repeatPassword) {
        onFetchSignUp(email, password);
      } else {
        alert("the passwords have to be iqual");
      }
    } else {
      alert("information is missing");
    }
  };

  const onFetchSignUp = (email, password) => {
    const post = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    console.log("info login", post);

    fetch("", post)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onTypeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onTypeRepeatPassword = (e) => {
    console.log(e.target.value);
    setRepeatPassword(e.target.value);
  };

  const onTypeFirstname = (e) => {
    console.log(e.target.value);
    setFirstname(e.target.value);
  };

  const onTypeSurnames = (e) => {
    console.log(e.target.value);
    setSurnames(e.target.value);
  };

  const onTypeFunInfo = (e) => {
    console.log(e.target.value);
    setFuninfo(e.target.value);
  };

  const onTypeSubjects = (e) => {
    console.log(e.target.value);
    setSubjects(e.target.value);
  };

  const onTypeWhyYouTeach = (e) => {
    console.log(e.target.value);
    setWhyyouteach(e.target.value);
  };

  const onTypeYearsOfExperience = (e) => {
    console.log(e.target.value);
    SetYearsexperience(e.target.value);
  };

  const onTypeIsTeacher = (e) => {
    if (e.target.checked) {
      setTeacher(false);
    } else {
      setTeacher(true);
    }
    console.log(e.target.value);
    console.log(document.getElementById("confirm_teacher").value);
  };

  const signupForm = () => {
    console.log("teste");
    setSignupteacher(!signupteacher);
  };

  const submit = () => {
    if (signupteacher == false) {
      actions.postUserData();
      actions.postStudentData();
      window.location.reload();
    } else {
      actions.postUserData();
      actions.postTeacherData();
      window.location.reload();
    }
  };

  return (
    <>
      <br></br>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="myform">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h3>{/* <i className="fa fa-user-plus fa-2x"></i> */}</h3>
                <h1>SignUp Form</h1>
              </div>
            </div>
            <form action="/Signuppage" method="post" name="registration" />
            <div className="form-group">
              {/* <label>Email address</label> */}
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={onTypeEmail}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="password"
                placeholder="Enter Password"
                value={password}
                onChange={onTypePassword}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>Conform Password</label> */}
              <input
                type="Conform password"
                name="Conform password"
                id="confirm_password"
                className="form-control"
                aria-describedby="Conform password"
                placeholder="Enter Conform Password"
                value={repeatPassword}
                onChange={onTypeRepeatPassword}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>Enter First Name</label> */}
              <input
                type="First Name"
                name="First Name"
                id="First_Name"
                className="form-control"
                aria-describedby="First Name"
                placeholder="Enter First Name"
                value={firstname}
                onChange={onTypeFirstname}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>First Name</label> */}
              <input
                type="Surnames"
                name="Surnames"
                id="Surnames"
                className="form-control"
                aria-describedby="Surnames"
                placeholder="Enter Surnames"
                value={surnames}
                onChange={onTypeSurnames}
              />
            </div>
            <p></p>
            {/* <div>
              <label>
                <input
                  type="checkbox"
                  id="confirm_teacher"
                  value={teacher}
                  onChange={onTypeIsTeacher} /> If you are a Teacher click here
              </label>
            </div> */}

            <div className="col-md-12 text-center mb-3">
              {signupteacher === true ? (
                <div>
                  <div className="form-group">
                    {/* <label>Email address</label> */}
                    <input
                      type="fun_info"
                      name="fun_info"
                      className="form-control"
                      id="fun_info"
                      aria-describedby="fun_info"
                      placeholder="Enter some Fun Information about You"
                      value={funinfo}
                      onChange={onTypeFunInfo}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    {/* <label>Password</label> */}
                    <input
                      type="subjects"
                      name="subjects"
                      id="subjects"
                      className="form-control"
                      aria-describedby="subjects"
                      placeholder="Enter the Subjects that You Teach"
                      value={subjects}
                      onChange={onTypeSubjects}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    {/* <label>Conform Password</label> */}
                    <input
                      type="why_you_teach"
                      name="why_you_teach"
                      id="why_you_teach"
                      className="form-control"
                      aria-describedby="why_you_teach"
                      placeholder="Enter a few words about Why You Teach"
                      value={whyyouteach}
                      onChange={onTypeWhyYouTeach}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    {/* <label>Enter First Name</label> */}
                    <input
                      type="years_experience"
                      name="years_experience"
                      id="years_experience"
                      className="form-control"
                      aria-describedby="years_experience"
                      placeholder="Enter the Years Of Experience that You have"
                      value={yearsexperience}
                      onChange={onTypeYearsOfExperience}
                    />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="col-md-12 text-center mb-3">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-warning tx-tfm"
                onClick={signupForm}
              >
                {signupteacher
                  ? "If You are only a Student Click Here"
                  : "If You are a Teacher Click Here"}
              </button>
            </div>

            <div className="col-md-12 text-center mb-3 ">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-dark tx-tfm"
                onClick={submit}
              >
                submit
              </button>
            </div>
            {/* <div className="col-md-12 ">
              <div className="form-group">
                <p className="text-center">
                  <Link to="/LoginPage">
                    <span>Already have an account?</span>
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};
