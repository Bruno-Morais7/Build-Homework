import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../../styles/style.css";
import { BASE_URL } from "../store/flux";

export const ForgetPassword = () => {
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

    fetch(BASE_URL + "/api/forgetpassword", post)
      .then((resp) => resp.json())
      .then((res) => {
        console.log();

        let templateParams = {
          sender_email: email,
          subject: "Reset password",
          message: `Link : ${res.link}`,
        };
        emailjs
          .send(
            "service_ygis1wj",
            "template_xkqpkbh",
            templateParams,
            "7rzVod9SV3vhzTprV"
          )
          .then((res) => {
            console.log("okokok");
            setEmail("");
          })
          .catch((err) => {
            console.log(err);
          });
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
                      <i className="fa fa-lock fa-2x"></i>
                    </h3>
                    <h2 className="text-center">Forgot Password?</h2>
                    <p>You can reset your password here.</p>
                    <div className="panel-body">
                      <form
                        id="register-form"
                        role="form"
                        autocomplete="off"
                        className="form"
                        method="post"
                        onSubmit={submitForgetPassword}
                      >
                        <div className="form-group">
                          <div className="input-group">
                            <span className="input-group-addon">
                              <i className="glyphicon glyphicon-envelope color-blue"></i>
                            </span>
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
                        <div className="form-group">
                          <button
                            id="Updatepassword"
                            name="recover-submit"
                            className="btn btn-lg btn-primary btn-block mt-3"
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
      </div>
    </>
  );
};
