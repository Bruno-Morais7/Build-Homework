import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { Lessoncard } from "../component/lessoncard";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";

export const Teacherpage = () => {
  const { store, actions } = useContext(Context);
  const linkTeacherId = store.teacherId[0];

  const dataTeacher = store?.teachers?.[0]?.teachers.find(
    (e) => e.id === linkTeacherId
  );

  const dataLessonsOftheTeacher = store?.lessons?.[0]?.lessons.filter(
    (e) => e.teacher_id === linkTeacherId
  );
  let countLessonsOfTeacher = dataLessonsOftheTeacher?.length;

  const listOfLessons = dataLessonsOftheTeacher?.map((lesson, indexL) => {
    return (
      <div key={indexL}>
        <Link to="/lesson" className="link-dark">
          <div
            onClick={() => {
              let saveLessonId = lesson.id;
              console.log(saveLessonId);
              actions.onClickSaveLessonId(lesson.id);
            }}
          >
            <Lessoncard
              title={lesson.title}
              subject={lesson.subject}
              summary={lesson.summary}
            />
          </div>
        </Link>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="mx-auto rounded bg-dark maxsize flex-wrap">
        <div className="p-5 mx-auto">
          <img
            src={dataTeacher ? dataTeacher["avatar"] : null}
            width="200"
            className="mx-auto d-block rounded"
          />
        </div>
        <div className="m-auto text-white text-center">
          <div className="mb-3">
            <h5>
              <span className="border-bottom border-warning">
                {" "}
                &nbsp; Name &nbsp;{" "}
              </span>
            </h5>
            <span className="flex-wrap text-warning fs-5">
              {dataTeacher ? dataTeacher["first_name"] : null}{" "}
              {dataTeacher ? dataTeacher["last_name"] : null}
            </span>
          </div>
          <div className="mb-4">
            <h5 className="mb-2">
              <span className="border-bottom border-warning fs-5">
                {" "}
                &nbsp; Years of experience &nbsp;{" "}
              </span>
            </h5>
            <span className="">
              {" "}
              {dataTeacher ? dataTeacher["years_experience"] : null}{" "}
            </span>
          </div>
        </div>
        <div className="mb-4">
          <h5 className="text-center text-white mb-3">
            <span className="border-bottom border-warning">
              &nbsp; Subjects teached &nbsp;
            </span>
          </h5>
          <div className="px-5 m-auto">
            <ul className="list-inline d-flex text-center bg-light rounded flex-wrap py-2">
              <li className="list-inline-item flex-fill">
                {dataTeacher ? dataTeacher["subjects1"] : null}
              </li>
              <li className="list-inline-item flex-fill">
                {dataTeacher ? dataTeacher["subjects2"] : null}
              </li>
              <li className="list-inline-item flex-fill">
                {dataTeacher ? dataTeacher["subjects3"] : null}
              </li>
              <li className="list-inline-item flex-fill">
                {dataTeacher ? dataTeacher["subjects4"] : null}
              </li>
            </ul>
          </div>
        </div>
        <div className="px-5 m-auto">
          <div className="mb-4">
            <h5 className="ms-5 my-2 text-white">
              <span className="border-bottom border-warning">
                &nbsp;Reason to Teach&nbsp;
              </span>
            </h5>
            <div className="p-1 rounded shadow-sm bg-light d-flex">
              <p className="ms-3 mt-1 mb-2 flex-fill text-break">
                {dataTeacher ? dataTeacher["why_you_teach"] : null}
              </p>
            </div>
          </div>
          <div>
            <h5 className="ms-5 my-2 text-white">
              <span className="border-bottom border-warning">
                &nbsp;Fun Info&nbsp;
              </span>
            </h5>
            <div className="p-1 rounded shadow-sm bg-light d-flex">
              <p className="ms-3 mb-2 mt-1 flex-fill text-break">
                {dataTeacher ? dataTeacher["fun_info"] : null}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-dark pe-5 d-flex justify-content-end text-center mt-3 py-3">
          <ul className="list-inline">
            <li className="list-inline-item">
              <h5 className="mb-0 d-block text-warning">
                {" "}
                {countLessonsOfTeacher}
              </h5>
              <small className="text-warning fw-bold">
                <i className="fas fa-book mr-1"></i> Lessons
              </small>
            </li>
          </ul>
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

      <div className="container-fluid">
        <div className="d-flex align-items-center justify-content-between">
          <h2 className="container-fluid col-10 fst-italic mt-5 pt-5 pb-3 border-top text-warning">Lessons<span className="text-dark">!</span></h2>
        </div>
        <div className="container-fluid col-10">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3 ">
          {listOfLessons ? listOfLessons : null}
        </div>
      </div>
      </div>
    </div>
  );
};
