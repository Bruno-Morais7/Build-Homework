import React from "react";
import "../../styles/index.css";
import checkmark from "../../img/checkmark.png";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"

export const Lesson = () => {
  const { store, actions } = useContext(Context);
  const linkLessonId = store.lessonId[0];

  const dataLesson = store?.lessons?.[0]?.lessons.find(e => e.id === linkLessonId)

  console.log(dataLesson)
  return (
    <div>
      <div className="p-4 p-md-5 text-white rounded bg-dark mb-4">
        <h1 className="container-fluid col-8">
          Time to <b className="text-warning">study</b>.
        </h1>
      </div>

      <div className="d-flex container-fluid col-10">
        <div className="row align-items-md-stretch text-center flex-fill">
          <div className="col-md-4">
            <div className="h-100 p-5">
              <h2 className="border-bottom border-warning pb-1 border-2">
                Subject
              </h2>
              <p>{dataLesson ? dataLesson["subject"] : null}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2 className="border-bottom text-warning pb-1 border-2">
                Title
              </h2>
              <p className="text-warning">{dataLesson ? dataLesson["title"] : null}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-100 p-5 rounded-3">
              <h2 className="border-bottom border-warning pb-1 border-2">
                Teacher
              </h2>
              <p>{dataLesson ? dataLesson["teacher_id"] : null}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-8 py-4">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Introduction
          </h1>
        </div>
        <p className="container-fluid col-10 fs-4 border-start mb-5">
        {dataLesson ? dataLesson["introduction"] : null}
        </p>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-8 py-4 bg-dark text-white rounded-3">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Main content
          </h1>
        </div>
        <p className="container-fluid col-10 fs-4 border-start mt-4 mb-5">
        {dataLesson ? dataLesson["written_content"] : null}
        </p>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-8 py-4">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Summary
          </h1>
        </div>
        <div className="container-fluid col-10 fs-4 border-start mb-5">
        {dataLesson ? dataLesson["summary"] : null}
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid col-8 py-4 bg-dark text-white rounded-3">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Keyword(s)
          </h1>
        </div>
        <div className="container-fluid col-10 fs-4 border-start mt-4 mb-5">
        <ul className="d-flex justify-content-evenly gap-2 flex-wrap">
            <li>{dataLesson ? dataLesson["key_word1"] : null}</li>
            <li>{dataLesson ? dataLesson["key_word2"] : null}</li>
            <li>{dataLesson ? dataLesson["key_word3"] : null}</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid col-8 py-4">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Assessment
          </h1>
        </div>

        <div className="container-fluid col-10 fs-4 border-start mt-4 mb-5">
          Ask for your students to bring some answers to class
          <ul>
            <li>{dataLesson ? dataLesson["question1"] : null}</li>
            <li>{dataLesson ? dataLesson["question2"] : null}</li>
            <li>{dataLesson ? dataLesson["question3"] : null}</li> 
            <li>{dataLesson ? dataLesson["question4"] : null}</li>
          </ul>
        </div>
      </div>

      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex">
        <div className="container-fluid col-8 d-flex gap-4 justify-content-end">
          <img className="img-fluid smaller my-auto" width={"77rem"} src={checkmark}></img>
          <h2 className="text-end">
            Congratutlations, this is <b className="text-warning">the end</b> of
            the lesson <br /> and now you know it{" "}
            <span className="text-warning">all</span>
          </h2>
        </div>
      </div>
    </div>
  );
};