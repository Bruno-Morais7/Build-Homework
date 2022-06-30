import React, { useState } from "react";
import "../../styles/style.css";
import emailjs from "@emailjs/browser";
import { useHistory } from "react-router-dom";

export const Contactpage = () => {
  const history = useHistory();
  const [toSend, setToSend] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_ic5f6bv", "template_muj066q", toSend, "qQRVwiJXNiaCwRoMX")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        history.push("/");
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <br></br>
      <h1>Contact Us</h1>
      <div className="container contact">
        <div className="row">
          <div className="col-md-3-fun">
            <div className="contact-info">
              <img
                src={require("../../img/contact.png").default}
                width="350px"
              />
              <h2>Teach&Learn</h2>

              <h4>Tell us about your issue so we can help you more quickly.</h4>
            </div>
          </div>
          <div className="col-md-9">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Name:
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your Name"
                    name="from_name"
                    value={toSend.to_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  Email:
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="reply_to"
                    value={toSend.reply_to}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <label className="control-label col-sm-2">
                  message:
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    rows="5"
                    id="message"
                    name="message"
                    value={toSend.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <br></br>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="submit" className="btn btn-default">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
