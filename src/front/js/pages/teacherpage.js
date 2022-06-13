import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { Lessoncard } from "../component/lessoncard";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Teacherpage = () => {
  const { store, actions } = useContext(Context);
  const listOfLessons = store?.lessons?.[0]?.lessons.map((lesson, index) => {
    return (
      <div key={index}>
        <Lessoncard
          title={lesson.title}
          subject={lesson.subject}
          summary={lesson.summary}
        />
      </div>
    );
  });

  return (
    <div className="py-5 px-4">
      <div className="col-md-6 mx-auto">
        <div className="bg-dark rounded-3">
          <div className="d-flex flex-wrap">
            <div>
              <img src={avatar} width="200" className="rounded m-5" />
            </div>
            <div className="m-auto text-white text-center">
              <h4 className="mb-2">
                <span className="border-bottom border-warning">
                  {" "}
                  &nbsp; Name &nbsp;{" "}
                </span>
              </h4>
              <h3 className="flex-wrap text-warning mb-4">
                "Son Goku Gohan Bulma"
              </h3>
              <h4 className="mb-2">
                <span className="border-bottom border-warning">
                  {" "}
                  &nbsp; Years of experience &nbsp;{" "}
                </span>
              </h4>
              <h4> "0" </h4>
            </div>
          </div>
          <div className="mb-3">
            <h4 className="text-center text-white mb-3">
              <span className="border-bottom border-warning">
                &nbsp; Subjects teached &nbsp;
              </span>
            </h4>
            <div className="px-5 m-auto">
              <ul className="list-inline d-flex text-center fs-5 bg-light rounded flex-wrap py-3">
                <li className="list-inline-item flex-fill">Math</li>
                <li className="list-inline-item flex-fill">Jungle</li>
                <li className="list-inline-item flex-fill">Theory of Nothing</li>
                <li className="list-inline-item flex-fill">Hate this game</li>
              </ul>
            </div>
          </div>
          <div className="px-5 m-auto gap-5">
            <div>
              <h4 className="ms-5 mb-3 text-white">
                <span className="border-bottom border-warning">
                  &nbsp;Reason to Teach&nbsp;
                </span>
              </h4>
              <div className="p-4 rounded shadow-sm bg-light d-flex">
                <p className="font-italic mb-0 flex-fill">
                  To help my fellow Students.
                </p>
              </div>
            </div>
            <div>
              <h4 className="ms-5 my-3 text-white">
                <span className="border-bottom border-warning">
                  &nbsp;Fun Info&nbsp;
                </span>
              </h4>
              <div className="p-4 rounded shadow-sm bg-light d-flex">
                <p className="font-italic mb-0 flex-fill">
                  Anything the teacher wants to add.
                </p>
              </div>
            </div>
          </div>
          {/* Feature that can be added... in time  FOLLOWERS*/}
          {/* <div className="bg-dark px-4 d-flex justify-content-end text-center">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <h5 className="mb-0 d-block text-warning">4</h5>
                  <small className="text-warning fw-bold">
                    <i className="fas fa-user mr-1"></i> Followers
                  </small>
                </li>
              </ul>
            </div> */}

          <div className="px-5 py-3 mt-3 m-auto">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="ms-5 mb-3 text-warning">Lessons available</h4>
              {/* another Feature if classes are too many SHOW ALL */}
              {/* <a href="#" className="btn btn-link text-white">
                  Show all
                </a> */}
            </div>
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xxlg-4 g-2 g-md-4 g-xxlg-5">
              {listOfLessons}
            </div>
          </div>
          <div className="bg-dark pt-1 pe-5 pb-5 d-flex justify-content-end text-center rounded-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-0 d-block text-warning"> "hardcoded" 7</h5>
                <small className="text-warning fw-bold">
                  <i className="fas fa-book mr-1"></i> Lessons
                </small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
