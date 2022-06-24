import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../store/flux";

export const UpdatePassword = () => {
  const { id } = useParams();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitPassword = (e) => {
    e.preventDefault();

    if (!newPassword.trim()) {
      return alert("please enter password");
    }

    if (newPassword !== confirmPassword) {
      return alert("Your password is not metch with confirm password.");
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

    fetch(BASE_URL + "/api/updatepassword", post)
      .then((resp) => resp.json())
      .then((res) => {
        alert("password updated successfully.");
        setNewPassword("");
        setConfirmPassword("");
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
                      type="password"
                      name="RetypePassword"
                      id="RetyprPassword"
                      className="form-control"
                      aria-describedby="RetypePassword"
                      placeholder="Retype Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
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
