import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/home.css";
import "../../styles/index.css";

export const LandingPage = () => {
  const { store, actions } = useContext(Context);
  console.log(store.users);
  
  const showUsers = store?.users?.[0]?.users.map((item, index) => {
    return (
      <div className="card" style={{ width: "17rem" }} key={item.id}>
          <div className="card-body">
            <h4 className="card-title">Email: {item.email}</h4>
            <br></br>
            <p className="card-title">password: {item.password}</p>
            <p className="card-title">userd_Id: {item.id}</p>
            <Link to="#" className="btn btn-light btn-sm">Go to the Teachers Lounge </Link>
          </div>
        </div>
        )  
  })

  const showLessons = store?.lessons?.[0]?.lessons.map((item, index) => {
    return (
      <div className="card" style={{ width: "17rem" }} key={index}>
          <div className="card-body">
            <h4 className="card-title">Title: {item.title}</h4>
            <br></br>
            <p className="card-title">Content: {item.written_content}</p>
            <p className="card-title">Date: {item.date}</p>
            <Link to="#" className="btn btn-light btn-sm">Go to the Teachers Lounge </Link>
          </div>
        </div>
        )  
  })

  return (
		<div className="container-fluid">
			<div><h3 style={{ color: "#b51616" }}> USERS </h3>
			  <div className="d-flex align-content-start flex-wrap ">
			    {showUsers}
			  </div>
			</div>
      <div><h3 style={{ color: "#b51616" }}> LESSONS </h3>
        <div className="d-flex align-content-start flex-wrap ">
        {showLessons}
        </div>
			</div>
		</div>
      )
};
