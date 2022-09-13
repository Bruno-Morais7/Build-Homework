import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../../styles/style.css";
import { BASE_URL } from "../store/flux";

export const ForgetPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const submitForgetPassword = (e) => {
    e.preventDefault();

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
        email: email,
        web_link: `${window.location.origin}/updatepassword/`,
      }),
    };
    const BASE_URL = process.env.BACKEND_URL;

    fetch(BASE_URL + "/api/forgetpassword", post)
      .then((resp) => resp.json())
      .then((res) => {
        let templateParams = {
          sender_email: email,
          subject: "Reset password",
          message: `Link : ${res.link}`,
        };
        emailjs
          .send(
            "service_dtilvg7",
            "template_83yj749",
            templateParams,
            "qQRVwiJXNiaCwRoMX"
          )
          .then((res) => {
            setEmail("");
            history.push("/loginpage");
          })
          .catch((err) => {});
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="container-fluid col-10">
        <div className="row">
          <div className="col-md-6 mx-auto bg-dark text-white p-5 rounded maxsize">
            <div className="myform">
              <div className="logo mb-3">
                <div className="col-md-12 text-center p-3">
                  <h3>
                    <i className="fa fa-lock fa-3x text-warning"></i>
                  </h3>
                  <h1 className="text-center pb-4">Forgot Password?</h1>
                  <p className="pb-2">You can reset your password here.</p>
                  <div className="panel-body">
                    <form
                      id="register-form"
                      role="form"
                      autoComplete="off"
                      className="form"
                      method="post"
                      onSubmit={submitForgetPassword}
                    >
                      <div className="form-group">
                        <div className="input-group">
                          <input
                            id="Email"
                            name="Email"
                            placeholder="Email address"
                            className="form-control"
                            type="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="form-group pt-4">
                        <button
                          name="recover-submit"
                          className="btn btn-warning btn-block"
                          value="Reset Password"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>

                      <input
                        type="hidden"
                        className="hide"
                        name="token"
                        id="token"
                        value=""
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
