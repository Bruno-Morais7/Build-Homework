import screen from "../../img/screen.png";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Teacherpage } from "./teacherpage";

export const Lessonworkspace = () => {
  const { store, actions } = useContext(Context);

  // let date = new Date()
  // console.log(date) 

  const BASE_URL = "https://3001-brunomorais-teachandlea-vfmnat1317z.ws-eu47.gitpod.io/"

  const [subject, setSubject] = useState();
  const [title, setTitle] = useState();
  const [introduction, setIntroduction] = useState();
  const [mainpart, setMainpart] = useState();
  const [summary, setSummary] = useState();
  const [keyword1, setKeyword1] = useState();
  const [keyword2, setKeyword2] = useState();
  const [keyword3, setKeyword3] = useState();
  const [question1, setQuestion1] = useState();
  const [question2, setQuestion2] = useState();
  const [question3, setQuestion3] = useState();
  const [question4, setQuestion4] = useState();
  const [nameteacher, setNameteacher] = useState();

  const onTypeSubject = (e) => {
    console.log(e.target.value);
    setSubject(e.target.value);
  };

  const onTypeTitle = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onTypeIntroduction = (e) => {
    console.log(e.target.value);
    setIntroduction(e.target.value);
  };

  const onTypeMainpart = (e) => {
    console.log(e.target.value);
    setMainpart(e.target.value);
  };

  const onTypeSummary = (e) => {
    console.log(e.target.value);
    setSummary(e.target.value);
  };

  const onTypeKeyword1 = (e) => {
    console.log(e.target.value);
    setKeyword1(e.target.value);
  };

  const onTypeKeyword2 = (e) => {
    console.log(e.target.value);
    setKeyword2(e.target.value);
  };

  const onTypeKeyword3 = (e) => {
    console.log(e.target.value);
    setKeyword3(e.target.value);
  };

  const onTypeQuestion1 = (e) => {
    console.log(e.target.value);
    setQuestion1(e.target.value);
  };

  const onTypeQuestion2 = (e) => {
    console.log(e.target.value);
    setQuestion2(e.target.value);
  };

  const onTypeQuestion3 = (e) => {
    console.log(e.target.value);
    setQuestion3(e.target.value);
  };

  const onTypeQuestion4 = (e) => {
    console.log(e.target.value);
    setQuestion4(e.target.value);
  };

 
  
  const postLessonData1 = () => {

    // fetching data from the backend
    fetch((BASE_URL + "api/lessons"), {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
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

  const submitLesson = () => {
    postLessonData1();
    window.location.reload()

  }

  // const listOfTeachers = store?.teachers?.[0]?.teachers.map((teacher, index) => {
  //    return <option value={index} key={index}> {teacher.first_name} {teacher.last_name} </option>
  // }) 

  const linkTeacherId = store.teacherId[0];
  const dataTeacher = store?.teachers?.[0]?.teachers.find(e => e.id === linkTeacherId)
  console.log(dataTeacher)
  const showTeacher = dataTeacher? dataTeacher["first_name"] + " " + dataTeacher["last_name"] : null

  useEffect(() => {
    onSelectNameTeacher();
  })

  const onSelectNameTeacher = () => {
    if (showTeacher === null) {setNameteacher("")}
    else (setNameteacher(dataTeacher["id"]));
    console.log("olá", nameteacher);
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
          </div>
        </div>
        <div className="col-md-6 px-5">
          <img className="img-fluid m-auto d-block w-75" src={screen} />
        </div>
      </div>

      {/* Form */}
      <form className="container-fluid">
        <div className="form-row d-flex container-fluid col-8 gap-4 flex-wrap my-4">
          <div className="form-group col">
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Suject
            </label>
            <input
              type="text"
              minLength={4}
              maxLength={30}
              className="form-control"
              placeholder="Subject of the lesson"
              value={subject}
              onChange={onTypeSubject}
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
              placeholder="Title of the lesson"
              value={title}
              onChange={onTypeTitle}
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
              value={showTeacher? showTeacher : " "}
              // onChange={onSelectNameTeacher}
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
            placeholder="What will be adressed.
              Importance, why and how."
            value={introduction}
            onChange={onTypeIntroduction}
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
            placeholder="Content (don't forget that it should be a short lesson [20min])."
            value={mainpart}
            onChange={onTypeMainpart}
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
            placeholder="Resume the information in a line...or 2."
            value={summary}
            onChange={onTypeSummary}
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
              placeholder="Place a keyword"
              value={keyword1}
              onChange={onTypeKeyword1}
            />
            <input
              type="text"
              maxLength={20}
              className="form-control mb-2"
              placeholder="or 2"
              value={keyword2}
              onChange={onTypeKeyword2}
            />
            <input
              type="text"
              maxLength={20}
              className="form-control mb-2"
              placeholder="or 3"
              value={keyword3}
              onChange={onTypeKeyword3}
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
            placeholder="Ask for your students to bring some answers to class"
            value={question1}
            onChange={onTypeQuestion1}
          />
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            placeholder="Make a few questions"
            value={question2}
            onChange={onTypeQuestion2}
          />
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            placeholder="Ask them to bring them to class"
            value={question3}
            onChange={onTypeQuestion3}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Nice way to build a Homework"
            value={question4}
            onChange={onTypeQuestion4}
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

          </div>
        </div>
      </div>
    </div>
  );
};

