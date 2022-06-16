import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <div className="container-fluid col-10 border-top">
    <div className="container-fluid mt-3 py-3">
      <ul className="list-unstyled d-inline-flex flex-wrap gap-5">
        <li className="text-muted">
          <Link to="/">Home</Link>
        </li>
        {/* <li className="text-muted">
          <Link to="/landingpage">About</Link>
        </li>
        <li className="text-muted">
          <Link to="/landingpage">FAQs</Link>
        </li> */}
      </ul>

      <span className="text-muted float-end">
        🎓© Teach&Learn, 2022 | All rights Reserved
      </span>
    </div>
  </div>
);
