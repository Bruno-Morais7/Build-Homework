import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Redirect, useHistory } from "react-router-dom";

export const Edit_Profile = () => {
  const { store, actions } = useContext(Context);

  const userLoggedEmail = localStorage.getItem("email");
  const userLoggedisteacher = localStorage.getItem("is_teacher");

  let dataTeacher = "";

  userLoggedisteacher === "true"
    ? (dataTeacher = store?.teachers?.[0]?.teachers.find(
        (e) => e.email === userLoggedEmail
      ))
    : (dataTeacher = store?.students?.[0]?.students.find(
        (e) => e.email === userLoggedEmail
      ));

  const test = dataTeacher ? dataTeacher["first_name"] : null;

  const [email, setEmail] = useState(dataTeacher ? dataTeacher["email"] : null);
  const [firstname, setFirstname] = useState(
    dataTeacher ? dataTeacher["first_name"] : null
  );
  const [lastname, setLastname] = useState(
    dataTeacher ? dataTeacher["last_name"] : null
  );
  const [subjects1, setSubjects1] = useState(
    dataTeacher ? dataTeacher["subjects1"] : null
  );
  const [subjects2, setSubjects2] = useState(
    dataTeacher ? dataTeacher["subjects2"] : null
  );
  const [subjects3, setSubjects3] = useState(
    dataTeacher ? dataTeacher["subjects3"] : null
  );
  const [subjects4, setSubjects4] = useState(
    dataTeacher ? dataTeacher["subjects4"] : null
  );
  const [whyyouteach, setWhyyouteach] = useState(
    dataTeacher ? dataTeacher["why_you_teach"] : null
  );
  const [yearsexperience, setYearsexperience] = useState(
    dataTeacher ? dataTeacher["years_experience"] : null
  );
  const [funinfo, setFuninfo] = useState(
    dataTeacher ? dataTeacher["fun_info"] : null
  );
  const [disabled, setDisabled] = useState(true);

  const BASE_URL = process.env.BACKEND_URL;

  const onClickEnable = (e) => {
    setDisabled(!disabled);
  };

  const onTypeFirstName = (e) => {
    setFirstname(e.target.value ? e.target.value : dataTeacher["first_name"]);
  };

  const onTypeLastName = (e) => {
    setLastname(e.target.value);
  };

  const onTypeSubjects1 = (e) => {
    setSubjects1(e.target.value);
  };

  const onTypeSubjects2 = (e) => {
    setSubjects2(e.target.value);
  };

  const onTypeSubjects3 = (e) => {
    setSubjects3(e.target.value);
  };

  const onTypeSubjects4 = (e) => {
    setSubjects4(e.target.value);
  };

  const onTypeWhyYouTeach = (e) => {
    setWhyyouteach(e.target.value);
  };

  const onTypeYearsOfExperience = (e) => {
    setYearsexperience(e.target.value);
  };

  const onTypeFunInfo = (e) => {
    setFuninfo(e.target.value);
  };

  const postUpdateProfile = () => {
    userLoggedisteacher === "true"
      ? // fetching data from the backend
        fetch(BASE_URL + "/api/teacher/" + dataTeacher["id"], {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify({
            // "email": email,
            first_name: firstname,
            last_name: lastname,
            subjects1: subjects1,
            subjects2: subjects2,
            subjects3: subjects3,
            subjects4: subjects4,
            why_you_teach: whyyouteach,
            years_experience: yearsexperience,
            fun_info: funinfo,
          }),
        })
      : fetch(BASE_URL + "/api/student/" + dataTeacher["id"], {
          headers: {
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify({
            // "email": email,
            first_name: firstname,
            last_name: lastname,
          }),
        });
  };

  const redirect = useHistory();

  const submitTeacher = () => {
    postUpdateProfile();
    // window.location.reload()
    window.alert("Profile Updated");
    redirect.push("/profile");
  };

  return (
    <div className="container">
      <div className="mx-auto rounded bg-dark text-white maxsize">
        <div className="flex-wrap">
          <div className="p-5">
            <img
              src={dataTeacher ? dataTeacher["avatar"] : null}
              width="200px"
              className="mx-auto d-block rounded"
            />
          </div>

          <div className="col-8 mx-auto">
            <h2 className="text-warning text-center">Personal Information</h2>
            <div className="d-flex pb-5 flex-wrap">
              <h5 className="pt-4">First Name: </h5>
              <input
                type="text"
                className="form-control mx-3"
                // placeholder={}
                value={
                  disabled
                    ? dataTeacher
                      ? dataTeacher["first_name"]
                      : null
                    : firstname
                }
                onChange={onTypeFirstName}
                disabled={disabled}
              />
              <h5 className="pt-4">Last Name: </h5>
              <input
                type="text"
                className="form-control mx-3"
                // placeholder={}
                value={
                  disabled
                    ? dataTeacher
                      ? dataTeacher["last_name"]
                      : null
                    : lastname
                }
                onChange={onTypeLastName}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
        {userLoggedisteacher === "true" ? (
          <div className="col-8 mx-auto">
            <h2 className="text-warning text-center">
              Teaching Information
            </h2>
            <div className="d-flex flex-wrap pb-5">
              <h5 className="pt-4">Subjects Teached:</h5>
              <div className="d-flex flex-wrap">
                <input
                  type="text"
                  className="form-control my-1 mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["subjects1"]
                        : null
                      : subjects1
                  }
                  onChange={onTypeSubjects1}
                  disabled={disabled}
                />
                <input
                  type="text"
                  className="form-control my-1 mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["subjects2"]
                        : null
                      : subjects2
                  }
                  onChange={onTypeSubjects2}
                  disabled={disabled}
                />
                <input
                  type="text"
                  className="form-control my-1 mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["subjects3"]
                        : null
                      : subjects3
                  }
                  onChange={onTypeSubjects3}
                  disabled={disabled}
                />
                <input
                  type="text"
                  className="form-control my-1 mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["subjects4"]
                        : null
                      : subjects4
                  }
                  onChange={onTypeSubjects4}
                  disabled={disabled}
                />
              </div>

              <div className="d-flex flex-wrap">
                <h5 className="pt-4">Why you Teach:</h5>{" "}
                <input
                  type="text"
                  className="form-control mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["why_you_teach"]
                        : null
                      : whyyouteach
                  }
                  onChange={onTypeWhyYouTeach}
                  disabled={disabled}
                />
              </div>
              <div className="d-flex flex-wrap">
                <h5 className="pt-4">Fun Information:</h5>{" "}
                <input
                  type="text"
                  className="form-control mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["fun_info"]
                        : null
                      : funinfo
                  }
                  onChange={onTypeFunInfo}
                  disabled={disabled}
                />
              </div>
              <div className="d-flex flex-wrap">
                <h5 className="pt-4">Years teaching: </h5>{" "}
                <input
                  type="text"
                  className="form-control mx-3"
                  // placeholder={}
                  value={
                    disabled
                      ? dataTeacher
                        ? dataTeacher["years_experience"]
                        : null
                      : yearsexperience
                  }
                  onChange={onTypeYearsOfExperience}
                  disabled={disabled}
                />
              </div>
            </div>
          </div>
        ) : null}
        <div className="d-flex flex-wrap justify-content-center gap-5 pb-5 px-5">
          <button className="btn btn-warning" onClick={onClickEnable}>
            {disabled ? "Edit your Profile" : "Cancel edition"}{" "}
          </button>

          <button className="btn btn-warning" onClick={submitTeacher}>
            Update
          </button>
        </div>
      </div>

      <span className="container fst-italic fs-5 mt-4 d-flex justify-content-center">
        For security reasons, if you are interested in
        changing your photo or email, please write to us.
      </span>
    </div>
  );
};
