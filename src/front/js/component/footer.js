import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="container-fluid col-10 border-top">
    <div className="container-fluid mt-3 py-3">
      <ul className="list-unstyled d-inline-flex flex-wrap gap-1 align-items-center">
        <li>
          <Link to="/"><div className="btn_effect"><i className="fa-solid fa-house text-dark "></i><span className="btn_text">Home</span></div></Link>
        </li>
        <li className="text-muted align-middle">
        © Teach&Learn, 2022 | All rights Reserved
        </li>
        {/* <li className="text-muted">
          <Link to="e">About</Link>
        </li>
        <li className="text-muted">
          <Link to="">FAQs</Link>
        </li> */}
      </ul>
    </div>
  </div>
);
