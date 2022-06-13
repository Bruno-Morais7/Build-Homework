import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

import { Context } from "../store/appContext";

export const SignupPage = () => {
  const { store, actions } = useContext(Context);

  const URLbase = "";

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

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

  const onFetchSignUp = (userName, email, password) => {
    const post = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
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

  const OnTypeUserName = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
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

  return (
    <>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="myform">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h3>
                  <i className="fa fa-user-plus fa-2x"></i>
                </h3>
                <h1>Signup</h1>
              </div>
            </div>
            <form action="/Signuppage" method="post" name="registration" />
            <div className="form-group">
              <label htmlFor="InputEmail1">User Name</label>
              <input
                type="text"
                name="Username"
                className="form-control"
                id="Username"
                aria-describedby="emailHelp"
                placeholder="Enter yourname"
                value={userName}
                onChange={OnTypeUserName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputEmail1">Email address</label>
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
            <div className="form-group">
              <label htmlFor="InputEmail1">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="email"
                placeholder="Enter Password"
                value={email}
                onChange={onTypePassword}
              />
            </div>
            <div className="form-group">
              <label htmlFor="InputEmail1">Conform Password</label>
              <input
                type="Conform password"
                name="Conform password"
                id="password"
                className="form-control"
                aria-describedby="Conform password"
                placeholder="Enter Conform Password"
                value={repeatPassword}
                onChange={onTypeRepeatPassword}
              />
            </div>
            <div className="col-md-12 text-center mb-3">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-primary tx-tfm"
              >
                submit
              </button>
            </div>
            <div className="col-md-12 ">
              <div className="form-group">
                <p className="text-center">
                  <Link to="/LoginPage">
                    <label id="signin">Already have an account?</label>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
