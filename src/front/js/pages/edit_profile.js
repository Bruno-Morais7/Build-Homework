import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext"
import { Link, Redirect, useHistory } from "react-router-dom";


export const Edit_Profile = () => {
  const { store, actions } = useContext(Context);

  const userLoggedEmail = localStorage.getItem("email");
  const userLoggedisteacher = localStorage.getItem("is_teacher")

  let dataTeacher = ""

  userLoggedisteacher === "true"? 
    (dataTeacher = store?.teachers?.[0]?.teachers.find(e => e.email === userLoggedEmail)) 
    : dataTeacher = store?.students?.[0]?.students.find(e => e.email === userLoggedEmail) 
     
  const test = dataTeacher? dataTeacher["first_name"] : null

  const [email, setEmail] = useState(dataTeacher? dataTeacher["email"] : null);
  const [firstname, setFirstname] = useState(dataTeacher? dataTeacher["first_name"] : null);
  const [lastname, setLastname] = useState(dataTeacher? dataTeacher["last_name"] : null);
  const [subjects1, setSubjects1] = useState(dataTeacher? dataTeacher["subjects1"] : null);
  const [subjects2, setSubjects2] = useState(dataTeacher? dataTeacher["subjects2"] : null);
  const [subjects3, setSubjects3] = useState(dataTeacher? dataTeacher["subjects3"] : null);
  const [subjects4, setSubjects4] = useState(dataTeacher? dataTeacher["subjects4"] : null);
  const [whyyouteach, setWhyyouteach] = useState(dataTeacher? dataTeacher["why_you_teach"] : null);
  const [yearsexperience, setYearsexperience] = useState(dataTeacher? dataTeacher["years_experience"] : null);
  const [funinfo, setFuninfo] = useState(dataTeacher? dataTeacher["fun_info"] : null);
  const [disabled, setDisabled] = useState(true);


  const BASE_URL = process.env.BACKEND_URL;


  const onClickEnable = (e) => {
    setDisabled(!disabled)

  };


  const onTypeFirstName = (e) => {
    setFirstname(e.target.value? e.target.value : dataTeacher["first_name"]);
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
    userLoggedisteacher === "true"? (
    // fetching data from the backend
    fetch((BASE_URL + "/api/teacher/" + dataTeacher["id"]), {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify({
        // "email": email,
        "first_name": firstname,
        "last_name": lastname,
        "subjects1": subjects1,
        "subjects2": subjects2,
        "subjects3": subjects3,
        "subjects4": subjects4,
        "why_you_teach": whyyouteach,
        "years_experience": yearsexperience,
        "fun_info": funinfo,
      })
    })
    )
    : 
      fetch((BASE_URL + "/api/student/" + dataTeacher["id"]), {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify({
          // "email": email,
          "first_name": firstname,
          "last_name": lastname,
          
        })
      })
  };

  const redirect = useHistory();

  const submitTeacher = () => {
    postUpdateProfile();
    // window.location.reload()
    window.alert('Profile Updated');
    redirect.push('/profile')
   
  };


  return (
    
    <div className="my-5 mx-2">
      <div className="col-xl-6 col-md-8 mx-auto border rounded-3 bg-dark text-white">
        <div className="flex-wrap">
          <div className="p-5">
            <img src={dataTeacher ? dataTeacher["avatar"] : null} width="200px" className="mx-auto d-block" />
            <button className="btn btn-warning mb-5 me-5 btn-sm" onClick={onClickEnable}>{disabled ? "Edit your Profile" : "Cancel edition"} </button>
          </div>

          <div className="col-10 mx-auto text-center">
            <h2 className="text-warning text-center">
              Personal Information
            </h2>
            <div>
              <h5 className="fw-normal my-2">First Name: </h5> 
                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["first_name"] : null : firstname}
                  onChange={onTypeFirstName}
                  disabled={disabled}
              />
              <h5 className="fw-normal my-2">Last Name: </h5> 
                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["last_name"] : null : lastname}
                  onChange={onTypeLastName}
                  disabled={disabled}
              />
            </div>
          </div>
        </div>
        {userLoggedisteacher === "true"? (
        <div className="col-10 text-center mx-auto">
          <h2 className="text-warning ">Teaching Info</h2>
          <div>
            <div>
              <h5 className="my-2 fw-normal">Subjects teached:</h5>
              <div className="flex-wrap">
              <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["subjects1"] : null : subjects1}
                  onChange={onTypeSubjects1}
                  disabled={disabled}
              />
                                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["subjects2"] : null : subjects2}
                  onChange={onTypeSubjects2}
                  disabled={disabled}
              />
                                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["subjects3"] : null : subjects3}
                  onChange={onTypeSubjects3}
                  disabled={disabled}
              />
                                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["subjects4"] : null : subjects4}
                  onChange={onTypeSubjects4}
                  disabled={disabled}
              />
              </div>
            </div>
            <div>
              <h5 className="my-2 fw-normal">Why you Teach:</h5>{" "}
              <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["why_you_teach"] : null : whyyouteach}
                  onChange={onTypeWhyYouTeach}
                  disabled={disabled}
              />
            </div>
            <div>
              <h5 className="my-2 fw-normal">Fun Information:</h5>{" "}
              <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["fun_info"] : null : funinfo}
                  onChange={onTypeFunInfo}
                  disabled={disabled}
              />
            </div>
            <div>
              <h5 className="my-2 fw-normal">Years teaching: </h5>{" "}
              <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? dataTeacher ? dataTeacher["years_experience"] : null : yearsexperience}
                  onChange={onTypeYearsOfExperience}
                  disabled={disabled}
              />
            </div>
          </div>
          
        </div>
        ) : null }
        <div className="col-md-12 text-end">
          <br></br>

          <button className="btn btn-warning mb-5 me-5" onClick={submitTeacher}>Update</button>

        </div>
        
      </div>
      
      <h5 className="container-fluid col-8 fst-italic mt-4 mb-5 d-flex">
      For security reasons with Teach & Learn users, if you are interested in changing your photo or email, write to us.
          </h5>
    </div>
  );
};
