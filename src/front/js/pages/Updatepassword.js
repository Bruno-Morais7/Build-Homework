import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../store/flux";
import validator from "validator";

export const UpdatePassword = () => {
  const history = useHistory();
  const { id } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const submitPassword = (e) => {
    e.preventDefault();

    // if (!newPassword.trim()) {
    //   return alert("please enter password");
    // }

    // if (newPassword !== confirmPassword) {
    //   return alert("Your password is not metch with confirm password.");
    // }

    if (
      !newPassword.trim() ||
      !validator.isStrongPassword(newPassword, {
        minLength: 8,
        maxLength: 16,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      alert(`This password must be contain these:
      minLength: 8 
      maxLength: 16 
      minLowercase: 1 
      minUppercase: 1 
      minNumbers: 1 
      minSymbols: 1 `);
      return;
      // setEmailError("Enter valid Email!");
    }

    if (!validator.equals(newPassword, confirmPassword)) {
      alert("password is not match with confirm password.");
      return;
    }

    // fetch
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
          "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
      crossDomain: true,
      redirect: "follow",
      body: JSON.stringify({
        id: id,
        password: newPassword,
      }),
    };

    const BASE_URL = process.env.BACKEND_URL;

    fetch(BASE_URL + "/api/updatepassword", post)
      .then((resp) => resp.json())
      .then((res) => {
        alert("password updated successfully.");
        setNewPassword("");
        setConfirmPassword("");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h3>
                      <i class="fa fa-solid fa-key fa-3x"></i>
                    </h3>
                    <h1>Update Password</h1>
                  </div>
                </div>
                <form
                  onSubmit={submitPassword}
                  action="#"
                  method="POST"
                  id="updateform"
                >
                  <div className="form-group">
                    <label htmlFor="InputPassword">NewPassword</label>
                    <input
                      type="password"
                      name="NewPassword"
                      id="NewPassword"
                      className="form-control"
                      aria-describedby="Password"
                      placeholder="Enter Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputPassword">RetypePassword</label>
                    <input
                      type={checked ? "Text" : "Password"}
                      name="RetypePassword"
                      id="RetyprPassword"
                      className="form-control"
                      aria-describedby="RetypePassword"
                      placeholder="Retype Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                  </div>
                  <div className="form-group mt-1">
                    <input
                      type="checkbox"
                      onClick={() => setChecked(!checked)}
                    />
                    Show Password
                  </div>
                  <div className="col-md-12 text-center mt-3">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                      form="updateform"
                    >
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
