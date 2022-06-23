import React from "react";
import "../../styles/index.css";
import { Lessoncard } from "../component/lessoncard";
import avatar from "../../img/avatar.png";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { Link, Redirect } from "react-router-dom";
import { Lesson } from "./lesson.js"


export const Profile = () => {
  const { store, actions } = useContext(Context);

  const BASE_URL = "https://3001-brunomorais-teachandlea-s1906renosr.ws-eu47.gitpod.io/"

  const linkTeacherId = store.teacherId[0];
  const dataTeacher = store?.teachers?.[0]?.teachers.find(e => e.id === linkTeacherId)
  console.log(dataTeacher)

  const dataLessonsOftheTeacher = store?.lessons?.[0]?.lessons.filter(e => e.teacher_id === linkTeacherId)
  console.log(dataLessonsOftheTeacher)

  // const EditLesson = () => {
  //   return (
      
  //   )
  // }

  const listOfLessons = dataLessonsOftheTeacher?.map((lesson, indexL) => {
    // const DeleteSelectedLesson = (id) => {

    //   fetch((BASE_URL + "api/lessons/" + lesson.id), {
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: "DELETE",

    //   })
    // }

    return (
      <div key={indexL}>
        <Lessoncard title={lesson.title}
          subject={lesson.subject}
          summary={lesson.summary} />
          <Link to="/edit_lesson" className="link-dark">
            <button className="btn btn-warning mb-5 me-2 btn-sm" onClick={() => {let saveLessonId = lesson.id; console.log(saveLessonId); actions.onClickSaveLessonId(lesson.id)}}>Edit Info</button>
          </Link>
        <button className="btn btn-warning mb-5 me-2 btn-sm" onClick={() => { fetch((BASE_URL + "api/lessons/" + lesson.id), { headers: { 'Content-Type': 'application/json' }, method: "DELETE", }); window.location.reload()}}>Delete</button>
      </div>
    )
  })

  return (
    <div className="my-5 mx-2">
      <div className="col-xl-6 col-md-8 mx-auto border rounded-3 bg-dark text-white">
        <div className="flex-wrap">
          <div className="p-5">
            <img src={dataTeacher ? dataTeacher["avatar"] : null} width="200px" className="mx-auto d-block" />
          </div>
          <div className="col-10 mx-auto text-center">
            <h2 className="text-warning text-center">
              Personal Information
            </h2>
            <div>
              <h5 className="fw-normal my-2">Name: </h5> <span> {dataTeacher ? dataTeacher["first_name"] : null} {dataTeacher ? dataTeacher["last_name"] : null} </span>
              <h5 className="fw-normal my-2">E-mail:  </h5> <span>{dataTeacher ? dataTeacher["email"] : null}</span>
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
                {dataTeacher ? <span> {dataTeacher["subjects1"]} </span> : null}
                {dataTeacher ? <span> {dataTeacher["subjects2"]} </span> : null}
                {dataTeacher ? <span> {dataTeacher["subjects3"]} </span> : null}
                {dataTeacher ? <span> {dataTeacher["subjects4"]} </span> : null}
              </div>
            </div>
            <div>
              <h5 className="my-2 fw-normal">Why you Teach:</h5>{" "}
              <span className="">
                {dataTeacher ? dataTeacher["why_you_teache"] : null}
              </span>{" "}
            </div>
            <div>
              <h5 className="my-2 fw-normal">Fun Information:</h5>{" "}
              <span className="">{dataTeacher ? dataTeacher["fun_info"] : null}</span>{" "}
            </div>
            <div>
              <h5 className="my-2 fw-normal">Years teaching: </h5>{" "}
              <span className="">&nbsp;{dataTeacher ? dataTeacher["years_experience"] : null}</span>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-end">
        <Link to="/edit_profile" className="link-dark">
          <button className="btn btn-warning mb-5 me-5" onClick={() => {let saveTeacherId = dataTeacher["id"]; console.log(saveTeacherId); actions.onClickSaveLessonId(dataTeacher["id"])}}>Edit Info</button>
        </Link>
        </div>
      </div>
      <div className="container-fluid">
        <h2 className="container-fluid col-8 fst-italic mt-5 py-5 border-top">
          My <b className="text-warning">lessons</b>!
        </h2>
        <div className="container-fluid col-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3 pb-5">
            {listOfLessons}
          </div>
        </div>
      </div>
    </div>
  );
};
