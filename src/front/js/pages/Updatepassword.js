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
      <div className="container-fluid col-10">
        <div className="row">
          <div className="col-md-6 mx-auto bg-dark text-white p-5 rounded maxsize">
              <div className="myform">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h3>
                      <i class="fa fa-solid fa-key fa-3x text-warning"></i>
                    </h3>
                    <h1 className="pb-4">Update Password</h1>
                    <p className="pb-2">You change your password here.</p>
                  </div>
                </div>
                <form
                  onSubmit={submitPassword}
                  action="#"
                  method="POST"
                  id="updateform"
                >
                  <div className="form-group py-2">
                    <label className="ms-2 mb-1" htmlFor="InputPassword">New Password</label>
                    <input
                      type={checked ? "Text" : "Password"}
                      name="NewPassword"
                      id="NewPassword"
                      className="form-control"
                      aria-describedby="Password"
                      placeholder="Enter a new Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                      value={newPassword}
                    />
                  </div>

                  <div className="form-group py-2">
                    <label className="ms-2 mb-1" htmlFor="InputPassword">Retype Password</label>
                    <input
                      type={checked ? "Text" : "Password"}
                      name="RetypePassword"
                      id="RetypePassword"
                      className="form-control"
                      aria-describedby="RetypePassword"
                      placeholder="Retype new Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                    <input
                      type="checkbox"
                      onClick={() => setChecked(!checked)}
                      className="ms-2 mt-2"
                    />
                    <span className="ms-1 mt-2">Show Password</span>
                  </div>
                  <div className="col-md-12 text-center py-2 mt-2">
                    <button
                      type="submit"
                      className=" btn btn-block btn-warning"
                      form="updateform"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
