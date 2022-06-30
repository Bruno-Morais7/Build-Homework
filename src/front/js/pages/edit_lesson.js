import screen from "../../img/screen.png";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Teacherpage } from "./teacherpage";


export const Edit_Lesson = () => {
  const { store, actions } = useContext(Context);

  const userLoggedEmail = localStorage.getItem("email");
  const userLoggedId = localStorage.getItem("id");
  const dataTeacher = store?.teachers?.[0]?.teachers.find(e => e.email === userLoggedEmail);
  const test = dataTeacher? dataTeacher["first_name"] : null
  const showTeacher = dataTeacher ? dataTeacher["first_name"] + " " + dataTeacher["last_name"] : " "
  const linkLessonId = store.lessonId[0];
  const dataLesson = store?.lessons?.[0]?.lessons.find(e => e.id === linkLessonId)

  const BASE_URL = process.env.BACKEND_URL

  const [subject, setSubject] = useState(dataLesson ? dataLesson["subject"] : null);
  const [title, setTitle] = useState(dataLesson ? dataLesson["title"] : null);
  const [introduction, setIntroduction] = useState(dataLesson ? dataLesson["introduction"] : null);
  const [mainpart, setMainpart] = useState(dataLesson ? dataLesson["written_content"] : null);
  const [summary, setSummary] = useState(dataLesson ? dataLesson["summary"] : null);
  const [keyword1, setKeyword1] = useState(dataLesson ? dataLesson["key_word1"] : null);
  const [keyword2, setKeyword2] = useState(dataLesson ? dataLesson["key_word2"] : null);
  const [keyword3, setKeyword3] = useState(dataLesson ? dataLesson["key_word3"] : null);
  const [question1, setQuestion1] = useState(dataLesson ? dataLesson["question1"] : null);
  const [question2, setQuestion2] = useState(dataLesson ? dataLesson["question2"] : null);
  const [question3, setQuestion3] = useState(dataLesson ? dataLesson["question3"] : null);
  const [question4, setQuestion4] = useState(dataLesson ? dataLesson["question4"] : null);
  const [nameteacher, setNameteacher] = useState(dataLesson ? dataLesson["id"] : null);
  const [disabled, setDisabled] = useState(true);

  const onTypeSubject = (e) => {
    setSubject(e.target.value);
  };

  const onTypeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onTypeIntroduction = (e) => {
    setIntroduction(e.target.value);
  };

  const onTypeMainpart = (e) => {
    setMainpart(e.target.value);
  };

  const onTypeSummary = (e) => {
    setSummary(e.target.value);
  };

  const onTypeKeyword1 = (e) => {
    setKeyword1(e.target.value);
  };

  const onTypeKeyword2 = (e) => {
    setKeyword2(e.target.value);
  };

  const onTypeKeyword3 = (e) => {
    setKeyword3(e.target.value);
  };

  const onTypeQuestion1 = (e) => {
    setQuestion1(e.target.value);
  };

  const onTypeQuestion2 = (e) => {
    setQuestion2(e.target.value);
  };

  const onTypeQuestion3 = (e) => {
    setQuestion3(e.target.value);
  };

  const onTypeQuestion4 = (e) => {
    setQuestion4(e.target.value);
  };

  const onClickEnable = (e) => {
    setDisabled(!disabled)

  };

  const postLessonData1 = () => {

    // fetching data from the backend
    fetch((BASE_URL + "/api/lessons/" + linkLessonId), {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        "title": title,
        "subject": subject,
        "introduction": introduction,
        "written_content": mainpart,
        "summary": summary,
        "key_word1": keyword1,
        "key_word2": keyword2,
        "key_word3": keyword3,
        "question1": question1,
        "question2": question2,
        "question3": question3,
        "question4": question4,
        "date": new Date(),
        "teacher_id": nameteacher,

      })
    })

  }

  const redirect = useHistory();

  const submitLesson = () => {
    postLessonData1();
    // window.location.reload()
    window.alert('Lesson Updated');
    redirect.push('/profile')

    
  }

  useEffect(() => {
    // setSubject(dataLesson["subject"]);
    onSelectNameTeacher();

  })

  const onSelectNameTeacher = () => {
    if (showTeacher === null) { setNameteacher("") }
    else (setNameteacher(dataTeacher ? dataTeacher["id"] : null));

  };

 

  return (
    <div>
      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex ">
        <div className="col-md-6 px-5">
          <h1 className="display-4 fst-italic">
            Welcome to the <b className="text-warning">Teacher Workplace</b>
          </h1>
          <div>
            <p className="lead mt-3 pt-3 ps-5">
              Build a small lesson to engage the students. <br />
              Don't forget... sometimes{" "}
              <b className="text-warning">less is more</b>!
            </p>
            <button className="btn btn-warning mb-5 me-5 btn-sm" onClick={onClickEnable}>{disabled ? "Edit Lesson" : "Cancel edition of the Lesson"} </button>
          </div>
        </div>
        <div className="col-md-6 px-5">
          <img className="img-fluid m-auto d-block w-75" src={screen} />
        </div>
      </div>

      {/* Form */}
      <form className="container-fluid">
        <div className="form-row d-flex container-fluid col-8 gap-4 flex-wrap my-4">
          <div className="form-group col" >
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Suject
            </label>
            <input
              type="text"
              minLength={4}
              maxLength={30}
              className="form-control"
              // placeholder={}
              value={disabled ? dataLesson ? dataLesson["subject"] : null : subject}
              onChange={onTypeSubject}
              disabled={disabled}

            />
          </div>
          <div className="form-group col">
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Title
            </label>
            <input
              type="text"
              minLength={4}
              maxLength={40}
              className="form-control"
              // placeholder={dataLesson? dataLesson["title"] : null}
              value={disabled ? dataLesson ? dataLesson["title"] : null : title}
              onChange={onTypeTitle}
              disabled={disabled}
            />
          </div>
          <div className="form-group col">
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Professor
            </label>
            <input
              type="text"
              id="teachers"
              className="form-control"
              placeholder={showTeacher}
              value={showTeacher ? showTeacher : " "}
              onChange={onSelectNameTeacher}
              onLoad={onSelectNameTeacher}
              disabled
            />


          </div>
        </div>
        <div className="form-group mx-auto col-10 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Introduction
          </label>
          <textarea
            type="textarea"
            minLength={20}
            maxLength={250}
            className="form-control"
            rows="3"
            // placeholder={dataLesson? dataLesson["introduction"] : null}
            value={disabled ? dataLesson ? dataLesson["introduction"] : null : introduction}
            onChange={onTypeIntroduction}
            disabled={disabled}
          />
        </div>
        <div className="form-group mx-auto col-10 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Main Part
          </label>
          <textarea
            type="textarea"
            minLength={300}
            maxLength={6000}
            className="form-control"
            rows="10"
            // placeholder={dataLesson? dataLesson["written_content"] : null}
            value={disabled ? dataLesson ? dataLesson["written_content"] : null : mainpart}
            onChange={onTypeMainpart}
            disabled={disabled}
          />
          {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea> */}
        </div>
        <div className="form-group mx-auto col-10 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Summary
          </label>
          <textarea
            type="text"
            minLength={40}
            maxLength={250}
            className="form-control mb-2"
            rows="2"
            // placeholder={dataLesson? dataLesson["summary"] : null}
            value={disabled ? dataLesson ? dataLesson["summary"] : null : summary}
            onChange={onTypeSummary}
            disabled={disabled}
          />
        </div>
        <div className="form-group mx-auto col-8 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Keyword
          </label>
          <div className="d-flex gap-5">
            <input
              type="text"
              maxLength={20}
              className="form-control mb-2"
              // placeholder={dataLesson? dataLesson["key_word1"] : null}
              value={disabled ? dataLesson ? dataLesson["key_word1"] : null : keyword1}
              onChange={onTypeKeyword1}
              disabled={disabled}
            />
            <input
              type="text"
              maxLength={20}
              className="form-control mb-2"
              // placeholder={dataLesson? dataLesson["key_word2"] : null}
              value={disabled ? dataLesson ? dataLesson["key_word2"] : null : keyword2}
              onChange={onTypeKeyword2}
              disabled={disabled}
            />
            <input
              type="text"
              maxLength={20}
              className="form-control mb-2"
              // placeholder={dataLesson? dataLesson["key_word4"] : null}
              value={disabled ? dataLesson ? dataLesson["key_word3"] : null : keyword3}
              onChange={onTypeKeyword3}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="form-group mx-auto col-8">

          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Assessment
          </label>
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            // placeholder={dataLesson? dataLesson["question1"] : null}
            value={disabled ? dataLesson ? dataLesson["question1"] : null : question1}
            onChange={onTypeQuestion1}
            disabled={disabled}
          />
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            // placeholder={dataLesson? dataLesson["question2"] : null}
            value={disabled ? dataLesson ? dataLesson["question2"] : null : question2}
            onChange={onTypeQuestion2}
            disabled={disabled}
          />
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            // placeholder={dataLesson? dataLesson["question3"] : null}
            value={disabled ? dataLesson ? dataLesson["question3"] : null : question3}
            onChange={onTypeQuestion3}
            disabled={disabled}
          />
          <input
            type="text"
            className="form-control"
            // placeholder={dataLesson? dataLesson["question4"] : null}
            value={disabled ? dataLesson ? dataLesson["question4"] : null : question4}
            onChange={onTypeQuestion4}
            disabled={disabled}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-warning fs-5 px-5 my-5" onClick={submitLesson}>
            Submit
            {/* Submit function */}
          </button>
        </div>
      </form>

      {/* Form */}
      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex">
        <div className="col-md-6 px-5">
          <img className="img-fluid mx-auto d-block" />
        </div>
        <div className="col-md-6 px-5">
          <h3 className="display-5 fst-italic">
            Well <b className="text-warning">done</b>!!!
          </h3>
          <div>
            <p className="lead mt-3 pt-3 ps-5 fst-italic">
              Time to share it with your students...
            </p>
            {/* <p className="lead ps-5 ms-5 fst-italic">
              Copy this <a className="underline">"url to copy"</a> and send it.
            </p> */}

          </div>
        </div>
      </div>
    </div>
  );
};

