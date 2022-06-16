import React from "react";
import "../../styles/index.css";
import { Lessoncard } from "../component/lessoncard";
import avatar from "../../img/avatar.png";

export const Profile = () => {
  return (
    <div className="my-5 mx-2">
      <div className="col-xl-6 col-md-8 mx-auto border rounded-3 bg-dark text-white">
        <div className="flex-wrap">
          <div className="p-5">
            <img src={avatar} width="200px" className="mx-auto d-block"/>
          </div>
          <div className="col-10 mx-auto text-center">
            <h2 className="text-warning text-center">
              Personal Information
            </h2>
            <div>
              <h5 className="fw-normal my-2">Name: </h5> <span> {"Name"} + {"surnames"} </span>
              <h5 className="fw-normal my-2">E-mail:  </h5> <span>{"E-mail"}</span>
              <h5 className="fw-normal my-2">Password: </h5> <span>{"****"}</span>
            </div>
          </div>
        </div>
        <div className="col-10 text-center mx-auto">
          <h2 className="text-warning ">Teaching Info</h2>
          <div>
            <div>
              <h5 className="my-2 fw-normal">Subjects teached:</h5>
              <div className="flex-wrap">
                <span className="mx-3">{"sub 1"}</span>
                <span className="mx-3">{"sub 2"}</span>
                <span className="mx-3">{"sub 3"}</span>
                <span className="mx-3">{"sub 4"}</span>
              </div>
            </div>
            <div>
              <h5 className="my-2 fw-normal">Why you Teach:</h5>{" "}
              <span className="">
                {
                  "I really like Teaching, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in rhoncus lectus, auctor porttitor orci."
                }
              </span>{" "}
            </div>
            <div>
              <h5 className="my-2 fw-normal">Fun Information:</h5>{" "}
              <span className="">{"I am a fun guy"}</span>{" "}
            </div>
            <div>
              <h5 className="my-2 fw-normal">Years teaching: </h5>{" "}
              <span className="">&nbsp;{"0 to none"}</span>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-end">
          <button className="btn btn-warning mb-5 me-5">Edit Info</button>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="container-fluid col-8 fst-italic mt-5 py-5 border-top">
          My <b className="text-warning">lessons</b>!
        </h2>
        <div className="container-fluid col-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3 pb-5">
            {"listOfLessons of this Teacher"}
          </div>
        </div>
      </div>
    </div>
  );
};
