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
        console.log(dataUsers);
        setUserDetails(dataUsers.profile_data);
        //   setStore({
        //     users: [...getStore().users, dataUsers],
        //   });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("userdetail", userDetails)
  console.log("localstorage", localStorage.getItem("email"))

  const userLoggedEmail = localStorage.getItem("email")

  const userLoggedisteacher = userDetails.is_teacher



  useEffect(() => {
    if (userLoggedisteacher === true) {
      const dataLoggedTeacher = store?.teachers?.[0]?.teachers.find((e) => e.email === userLoggedEmail);
      setAllUserDetails(dataLoggedTeacher)
      console.log("dataloggedteacher", dataLoggedTeacher)
      
    }
    else if (userLoggedisteacher === false) {
      const dataLoggedStudent = store?.students?.[0]?.students.find((e) => e.email === userLoggedEmail);
      setAllUserDetails(dataLoggedStudent)
      console.log("dataloggedteacher", dataLoggedStudent)
    };
  }, [userDetails]);

  const BASE_URL = process.env.BACKEND_URL;
  console.log("dataloggedteacher2222", alluserdetails)
  // const linkTeacherId = store.teacherId[0];
  // const dataTeacher = store?.teachers?.[0]?.teachers.find((e) => e.id === linkTeacherId);
  // console.log(dataTeacher);

  const dataLessonsOftheTeacher = userLoggedisteacher? store?.lessons?.[0]?.lessons.filter((e) => e.teacher_id === alluserdetails.id) : null;
    // console.log(dataLessonsOftheTeacher);
  const listOfLessons = dataLessonsOftheTeacher?.map((lesson, indexL) => {


    return (
      <div key={indexL}>
        <Lessoncard
          title={lesson.title}
          subject={lesson.subject}
          summary={lesson.summary}
        />
        <Link to="/edit_lesson" className="link-dark">
          <button
            className="btn btn-warning mb-5 me-2 btn-sm"
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
          className="btn btn-warning mb-5 me-2 btn-sm"
          onClick={() => {
            fetch(BASE_URL + "/api/lessons/" + lesson.id, {
              headers: { "Content-Type": "application/json" },
              method: "DELETE",
            });
            window.alert('Lesson Deleted');
            window.location.reload();
            window.location.reload();
          }}
        >
          Delete
        </button>
        
      </div>
    );
  });

  console.log("confirmar", userLoggedisteacher)

  return (
    <div className="my-5 mx-2">
      <div className="col-xl-6 col-md-8 mx-auto border rounded-3 bg-dark text-white">
        <div className="flex-wrap">
          <div className="p-5">
            <img
              src={alluserdetails ? alluserdetails.avatar : null}
              width="200px"
              className="mx-auto d-block"
            />
          </div>
          <div className="col-10 mx-auto text-center">
            <h2 className="text-warning text-center">Personal Information</h2>
            <div>
              <h5 className="fw-normal my-2" >Name: {userDetails.name}</h5>{" "}
              <span>
                {" "}
                {alluserdetails ? alluserdetails.first_name : null}{" "}
                {alluserdetails ? alluserdetails.last_name : null}{" "}
              </span>
              <h5 className="fw-normal my-2 ">E-mail:</h5>{" "}
              <span>{userDetails ? userDetails.email : null}</span>

            </div>
          </div>
        </div>
        {userLoggedisteacher === true ? (
            <div className="col-10 text-center mx-auto">
            <h2 className="text-warning ">Teaching Info</h2>
            <div>
              <div>
                <h5 className="fw-normal my-2 ">Subjects teached:</h5>
                <div className="flex-wrap">
                  {alluserdetails ? <span> {alluserdetails.subjects1} </span> : null}
                  {alluserdetails ? <span> {alluserdetails.subjects2} </span> : null}
                  {alluserdetails ? <span> {alluserdetails.subjects3} </span> : null}
                  {alluserdetails ? <span> {alluserdetails.subjects4} </span> : null}
                </div>
              </div>
              <div>
                <h5 className="fw-normal my-2 ">Why you Teach:</h5>{" "}
                <span className="">
                {alluserdetails ? alluserdetails.why_you_teach : null}
                </span>{" "}
              </div>
              <div>
                <h5 className="fw-normal my-2 ">Fun Information:</h5>{" "}
                <span className="">
                {alluserdetails ? alluserdetails.fun_info : null}
                </span>{" "}
              </div>
              <div>
                <h5 className="fw-normal my-2 ">Years teaching: </h5>{" "}
                <span className="">
                  &nbsp;{alluserdetails ? alluserdetails.years_experience : null}
                </span>
              </div>
            </div>
          </div>
        ) : null }
        
        <div className="col-md-12 text-end">
          <Link to="/edit_profile" className="link-dark">
            <button
              className="btn btn-warning mb-5 me-5"
              // onClick={() => {
              //   let saveTeacherId = dataTeacher["id"];
              //   console.log(saveTeacherId);
              //   actions.onClickSaveLessonId(dataTeacher["id"]);
              // }}
            >
              Edit Info
            </button>
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
