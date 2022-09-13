import React, { useState, useContext, useEffect } from "react";
import "../../styles/index.css";
import { Lessoncard } from "../component/lessoncard";
import avatar from "../../img/avatar.png";

import { Context } from "../store/appContext";
import { Link, Redirect } from "react-router-dom";
import { Lesson } from "./lesson.js";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [userDetails, setUserDetails] = useState({});
  const [alluserdetails, setAllUserDetails] = useState({});

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = () => {
    const post = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
          "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        token: localStorage.getItem("token"),
      },
      crossDomain: true,
      redirect: "follow",
      // body: JSON.stringify({
      //   email: email,
      //   password: password,
      // }),
    };
    const BASE_URL = process.env.BACKEND_URL;

    fetch(BASE_URL + "/api/profile", post)
      .then((resp) => resp.json())
      .then((dataUsers) => {
        setUserDetails(dataUsers.profile_data);
        //   setStore({
        //     users: [...getStore().users, dataUsers],
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userLoggedEmail = localStorage.getItem("email");

  const userLoggedisteacher = userDetails.is_teacher;

  useEffect(() => {
    if (userLoggedisteacher === true) {
      const dataLoggedTeacher = store?.teachers?.[0]?.teachers.find(
        (e) => e.email === userLoggedEmail
      );
      setAllUserDetails(dataLoggedTeacher);
    } else if (userLoggedisteacher === false) {
      const dataLoggedStudent = store?.students?.[0]?.students.find(
        (e) => e.email === userLoggedEmail
      );
      setAllUserDetails(dataLoggedStudent);
    }
  }, [userDetails]);

  const BASE_URL = process.env.BACKEND_URL;

  const dataLessonsOftheTeacher = userLoggedisteacher
    ? store?.lessons?.[0]?.lessons.filter(
        (e) => e.teacher_id === alluserdetails.id
      )
    : null;
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
        <Link to="/edit_lesson" className="link-dark">
          <button
            className="btn btn-warning ms-2 mt-1 btn-sm"
            onClick={() => {
              let saveLessonId = lesson.id;
              console.log(saveLessonId);
              actions.onClickSaveLessonId(lesson.id);
            }}
          >
            Edit Info
          </button>
        </Link>

        <button
          className="btn btn-warning float-end mt-1 me-2 btn-sm"
          onClick={() => {
            fetch(BASE_URL + "/api/lessons/" + lesson.id, {
              headers: { "Content-Type": "application/json" },
              method: "DELETE",
            });
            window.alert("Lesson Deleted");
            window.location.reload();
            window.location.reload();
          }}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="mx-auto rounded bg-dark text-white maxsize">
        <div className="flex-wrap">
          <div className="p-5">
            <img
              src={alluserdetails ? alluserdetails.avatar : null}
              width="200px"
              className="mx-auto d-block rounded"
            />
          </div>
          <div className="col-8 mx-auto">
            <h2 className="text-warning text-center">Personal Information</h2>
            <div className="d-flex pt-3 pb-2 flex-wrap">
              <h5>
                <u>Name: {userDetails.name}</u>
              </h5>{" "}
              <h5 className="ms-3 fw-normal">
                {alluserdetails ? alluserdetails.first_name : null}{" "}
                {alluserdetails ? alluserdetails.last_name : null}{" "}
              </h5>
            </div>
            <div className="d-flex pt-2 pb-5 flex-wrap">
              <h5>
                <u>E-mail:</u>
              </h5>{" "}
              <h5 className="ms-3 fw-normal text-break">
                {userDetails ? userDetails.email : null}
              </h5>
            </div>
          </div>
        </div>
        {userLoggedisteacher === true ? (
          <div className="col-8 mx-auto mb-4">
            <h2 className="text-warning text-center pb-2">Teaching Information</h2>
            <div className="d-flex py-3 flex-wrap">
            <h5>
                <u>Subjects Teached: </u></h5>
              <div className="flex-wrap">
                {alluserdetails ? (
                  <span className="ms-3 fs-5"> {alluserdetails.subjects1}; </span>
                ) : null}
                {alluserdetails ? (
                  <span className="ms-3 fs-5"> {alluserdetails.subjects2}; </span>
                ) : null}
                {alluserdetails ? (
                  <span className="ms-3 fs-5"> {alluserdetails.subjects3}; </span>
                ) : null}
                {alluserdetails ? (
                  <span className="ms-3 fs-5"> {alluserdetails.subjects4}; </span>
                ) : null}
              </div>
            </div>
            <div className="d-flex py-3 flex-wrap">
            <h5>
                <u>Why you Teach:</u></h5>
              <span className="ms-3 fs-5 text-break">
                {alluserdetails ? alluserdetails.why_you_teach : null}
              </span>{" "}
            </div>
            <div className="d-flex py-3 flex-wrap">
            <h5>
                <u>Fun Information:</u></h5>{" "}
              <span className="ms-3 fs-5 text-break">
                {alluserdetails ? alluserdetails.fun_info : null}
              </span>{" "}
            </div>
            <div className="d-flex pt-3 flex-wrap">
            <h5>
                <u>Years teaching: </u></h5>{" "}
              <span className="ms-3 fs-5">
                {alluserdetails ? alluserdetails.years_experience : null}
              </span>
            </div>
          </div>
        ) : null}

        <div className="text-center">
          <Link to="/edit_profile" className="link-dark">
            <button className="btn btn-warning mb-5 mx-5">Edit Info</button>
          </Link>
        </div>
      </div>
      {userLoggedisteacher === true ? (
        <div className="container-fluid">
          <h2 className="container-fluid col-10 fst-italic mt-5 pt-5 pb-3 border-top">
            My <b className="text-warning">lessons</b>!
          </h2>
          <div className="container-fluid col-10">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3">
              {listOfLessons}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
