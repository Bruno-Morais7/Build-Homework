import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

import { Context } from "../store/appContext";

export const SignupPage = () => {
  const { store, action } = useContext(Context);

  const URLbase = "";

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setconfirmpassword] = useState();

  const onSubmitClicked = () => {
    console.log(" click and submit ");

    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
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

  const onTypeconfirmPassword = (e) => {
    console.log(e.target.value);
    setconfirmpassword(e.target.value);
  };

  return (
    <>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="myform">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h3>
                  <i class="fa fa-user-plus fa-2x"></i>
                </h3>
                <h1>Signup</h1>
              </div>
            </div>
            <form action="/Signuppage" method="post" name="registration" />
            <div className="form-group">
              <label for="InputEmail1">Email address</label>
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
              <label for="InputPassword">Password</label>
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
              <label for="InputConfirmPassword"> Confirm Password </label>
              <input
                type="confirm password"
                name="confirm password"
                id="confirm password"
                className="form-control"
                aria-describedby="confirm password"
                placeholder="Enter Confirm Password"
                value={confirmPassword}
                onChange={onTypeconfirmPassword}
              />
            </div>
            <div class="col-md-12 text-center mb-3">
              <button
                type="submit"
                class=" btn btn-block mybtn btn-primary tx-tfm"
                value={onSubmitClicked}
                onChange={onSubmitClicked}
              >
                submit
              </button>
            </div>
            <div class="col-md-12 ">
              <div class="form-group">
                <p class="text-center">
                  <Link to="/LoginPage">
                    <a id="signin">Already have an account?</a>
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
