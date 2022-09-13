import React from "react";
import "../../styles/index.css";
import checkmark from "../../img/checkmark.png";
import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Lesson = () => {
  const { store, actions } = useContext(Context);
  const linkLessonId = store.lessonId[0];
  // const linkTeacherId = store.teacherId[0];

  const dataLesson = store?.lessons?.[0]?.lessons.find(
    (e) => e.id === linkLessonId
  );
  const dataTeacher = store?.teachers?.[0]?.teachers.find(
    (t) => t.id === dataLesson?.teacher_id
  );

  return (
    <div className="container">
      <div className="p-4 p-md-5 text-white rounded bg-dark mb-4">
        <h3 className="container-fluid text-center col-10">
          Time to <b className="text-warning">study</b>.
        </h3>
      </div>

      <div className="d-flex container-fluid col-10">
        <div className="row align-items-md-stretch text-center flex-fill py-3">
          <div className="col-md-4">
            <div className="p-3">
              <h5 className="border-bottom border-warning pb-1 border-2">
                Subject
              </h5>
              <p className="fs-6 ">
                {dataLesson ? dataLesson["subject"] : null}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 text-white bg-dark rounded-3">
              <h5 className="border-bottom text-warning pb-1 border-2">
                Title
              </h5>
              <p className="text-warning fs-6">
                {dataLesson ? dataLesson["title"] : null}
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-3 rounded-3">
              <h5 className="border-bottom border-warning pb-1 border-2">
                Teacher
              </h5>
              <p className="fs-6">
                {dataTeacher ? dataTeacher["first_name"] : null}{" "}
                {dataTeacher ? dataTeacher["last_name"] : null}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-10 py-4">
          <h4 className="border-bottom border-warning border-2 pb-1 text-center">
            Introduction
          </h4>
        </div>
        <pre className="container-fluid col-10 border-start mb-5 text-justify fs-6">
          {dataLesson ? dataLesson["introduction"] : null}
        </pre>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-10 py-4 bg-dark text-white rounded-3">
          <h4 className="border-bottom border-warning border-2 pb-1 text-center">
            Main content
          </h4>
        </div>
        <pre className="container-fluid col-10 border-start mt-4 mb-5 fs-6">
          {dataLesson ? dataLesson["written_content"] : null}
        </pre>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-10 py-4">
          <h4 className="border-bottom border-warning border-2 pb-1 text-center">
            Summary
          </h4>
        </div>
        <div className="container-fluid col-10 border-start mb-5">
          {dataLesson ? dataLesson["summary"] : null}
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid col-10 py-4 bg-dark text-white rounded-3">
          <h4 className="border-bottom border-warning border-2 pb-1 text-center">
            Keyword(s)
          </h4>
        </div>
        <div className="container-fluid col-10 border-start mt-4 mb-5">
          <div className="d-flex justify-content-around flex-wrap">
            {dataLesson ? <span> {dataLesson["key_word1"]} </span> : null}
            {dataLesson ? <span> {dataLesson["key_word2"]} </span> : null}
            {dataLesson ? <span> {dataLesson["key_word3"]} </span> : null}
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid col-10 mt-4">
          <h5 className="border-bottom border-warning border-2 pb-1 text-center">
            Assessment
          </h5>
        </div>

        <div className="container-fluid col-10 mt-4 mb-5">
          <ul>
            
            {dataLesson ? <li><span> {dataLesson["question1"]} </span></li> : null}
            {dataLesson ? <li><span> {dataLesson["question2"]} </span></li> : null}
            {dataLesson ? <li><span> {dataLesson["question3"]} </span></li> : null}
            {dataLesson ? <li><span> {dataLesson["question4"]} </span></li> : null}
          </ul>
        </div>
      </div>

      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex">
        <div className="container-fluid col-10 d-flex gap-4 justify-content-end">
          <img
            className="img-fluid smaller my-auto"
            width={"77rem"}
            src={checkmark}
          ></img>
          <h3 className="text-end">
            Congratutlations, this is <b className="text-warning">the end</b> of
            the lesson <br /> and now you know it{" "}
            <span className="text-warning">all</span>
          </h3>
        </div>
      </div>
    </div>
  );
};
