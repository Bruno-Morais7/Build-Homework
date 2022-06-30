import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { Lessoncard } from "../component/lessoncard";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";



export const Teacherpage = () => {
  const { store, actions } = useContext(Context);
  const linkTeacherId = store.teacherId[0];

  const dataTeacher = store?.teachers?.[0]?.teachers.find(e => e.id === linkTeacherId)

  const dataLessonsOftheTeacher = store?.lessons?.[0]?.lessons.filter(e => e.teacher_id === linkTeacherId)
  let countLessonsOfTeacher = dataLessonsOftheTeacher?.length


  const listOfLessons = dataLessonsOftheTeacher?.map((lesson, indexL) => {
    return (
      <div key={indexL}>
        <Link to="/lesson" className="link-dark">
        <div onClick={() => {let saveLessonId = lesson.id; console.log(saveLessonId); actions.onClickSaveLessonId(lesson.id)}}>
        <Lessoncard title={lesson.title}
          subject={lesson.subject}
          summary={lesson.summary}/>
          </div>
        </Link>
      </div>
    )
  })

  return (
    <div className="py-5 px-4">
      <div className="col-md-6 mx-auto">
        <div className="bg-dark rounded-3">
          <div className="d-flex flex-wrap">
            <div>
              <img src={dataTeacher? dataTeacher["avatar"] : null} width="200" className="rounded m-5" />
            </div>
            <div className="m-auto text-white text-center">
              <h4 className="mb-2">
                <span className="border-bottom border-warning">
                  {" "}
                  &nbsp; Name &nbsp;{" "}
                </span>
              </h4>
              <h3 className="flex-wrap text-warning mb-4">
              {dataTeacher? dataTeacher["first_name"] : null} {dataTeacher? dataTeacher["last_name"] : null}
              </h3>
              <h4 className="mb-2">
                <span className="border-bottom border-warning">
                  {" "}
                  &nbsp; Years of experience &nbsp;{" "}
                </span>
              </h4>
              <h4> {dataTeacher? dataTeacher["years_experience"] : null} </h4>
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
                <li className="list-inline-item flex-fill">{dataTeacher? dataTeacher["subjects1"] : null}</li>
                <li className="list-inline-item flex-fill">{dataTeacher? dataTeacher["subjects2"] : null}</li>
                <li className="list-inline-item flex-fill">{dataTeacher? dataTeacher["subjects3"] : null}</li>
                <li className="list-inline-item flex-fill">{dataTeacher? dataTeacher["subjects4"] : null}</li>
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
                {dataTeacher? dataTeacher["why_you_teach"] : null}
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
                {dataTeacher? dataTeacher["fun_info"] : null}
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

            </div>
            <div className="row row-cols-md-2 row-cols-lg-3 row-cols-xxlg-4 g-2 g-md-4 g-xxlg-5">
              {listOfLessons? listOfLessons : null}
            </div>
          </div>
          <div className="bg-dark pt-1 pe-5 pb-5 d-flex justify-content-end text-center rounded-3">
            <ul className="list-inline mb-0">
              <li className="list-inline-item">
                <h5 className="mb-0 d-block text-warning"> {countLessonsOfTeacher}</h5>
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