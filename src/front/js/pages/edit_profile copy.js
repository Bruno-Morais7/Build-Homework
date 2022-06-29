import React from "react";
import "../../styles/index.css";
import avatar from "../../img/avatar.png";
import { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext"
import { Link, Redirect, useHistory } from "react-router-dom";


export const Edit_Profile = () => {
  const { store, actions } = useContext(Context);

  const [userDetails, setUserDetails] = useState({});
  const [alluserdetails, setAllUserDetails] = useState({});

  // const userLoggedEmail = localStorage.getItem("email")
  // const userLoggedisteacher = localStorage.getItem("is_teacher")
  
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

  const userLoggedEmail = localStorage.getItem("email")
  const userLoggedisteacher = userDetails.is_teacher

  useEffect(() => {
    if (userLoggedisteacher === true) {
      const dataLoggedTeacher = store?.teachers?.[0]?.teachers.find((e) => e.email === userLoggedEmail);
      setAllUserDetails(dataLoggedTeacher)
      console.log("dataloggedteacher", dataLoggedTeacher)
      
    }
    else if (userLoggedisteacher === false) {
      const dataLoggedStudent = store?.student?.[0]?.students.find((e) => e.email === userLoggedEmail);
      setAllUserDetails(dataLoggedStudent)
      console.log("dataloggedteacher", dataLoggedStudent)
    };
  }, [userDetails]);

  console.log("primeiro", alluserdetails)
 
   
  const [firstname, setFirstname] = useState(alluserdetails ? alluserdetails.first_name : null);
  const [lastname, setLastname] = useState(alluserdetails ? alluserdetails.last_name : null);
  const [subjects1, setSubjects1] = useState(alluserdetails ? alluserdetails.subjects1 : null);
  const [subjects2, setSubjects2] = useState(alluserdetails ? alluserdetails.subjects2 : null);
  const [subjects3, setSubjects3] = useState(alluserdetails ? alluserdetails.subjects3 : null);
  const [subjects4, setSubjects4] = useState(alluserdetails ? alluserdetails.subjects4 : null);
  const [whyyouteach, setWhyyouteach] = useState(alluserdetails ? alluserdetails.why_you_teach : null);
  const [yearsexperience, setYearsexperience] = useState(alluserdetails ? alluserdetails.years_experience : null);
  const [funinfo, setFuninfo] = useState(alluserdetails ? alluserdetails.fun_info : null);
  const [disabled, setDisabled] = useState(true);

 
  console.log("email", userLoggedEmail)
  console.log("emais_teacheril", userLoggedisteacher)

  console.log("alluserdetails", alluserdetails)
  console.log("userdetails", userDetails)

  console.log("namenamaname", alluserdetails.first_name)

  const BASE_URL = process.env.BACKEND_URL
  console.log(BASE_URL)



  const onClickEnable = (e) => {
    console.log("teste")
    // e.target.disabled = false
    setDisabled(!disabled)

  };

 

  // const onTypeEmail = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };

  const onTypeFirstName = (e) => {
    console.log(e.target.value);
    setFirstname(e.target.value);
  };

  const onTypeLastName = (e) => {
    console.log(e.target.value);
    setLastname(e.target.value);
  };

  const onTypeSubjects1 = (e) => {
    console.log(e.target.value);
    setSubjects1(e.target.value);
  };

  const onTypeSubjects2 = (e) => {
    console.log(e.target.value);
    setSubjects2(e.target.value);
  };

  const onTypeSubjects3 = (e) => {
    console.log(e.target.value);
    setSubjects3(e.target.value);
  };

  const onTypeSubjects4 = (e) => {
    console.log(e.target.value);
    setSubjects4(e.target.value);
  };

  const onTypeWhyYouTeach = (e) => {
    console.log(e.target.value);
    setWhyyouteach(e.target.value);
  };

  const onTypeYearsOfExperience = (e) => {
    console.log(e.target.value);
    setYearsexperience(e.target.value);
  };

  const onTypeFunInfo = (e) => {
    console.log(e.target.value);
    setFuninfo(e.target.value);
  };

  const postUpdateProfile = () => {

    // fetching data from the backend
    fetch((BASE_URL + "/api/teacher/" + alluserdetails.id), {
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
  }

  const redirect = useHistory();

  const submitTeacher = () => {
    postUpdateProfile();
    // window.location.reload()
    window.alert('Profile Updated');
    redirect.push('/profile')
   
  }

  console.log("nome", firstname)

  return (
    <div className="my-5 mx-2">
      <div className="col-xl-6 col-md-8 mx-auto border rounded-3 bg-dark text-white">
        <div className="flex-wrap">
          <div className="p-5">
            <img src={alluserdetails ? alluserdetails.avatar : null} width="200px" className="mx-auto d-block" />
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
                  value={disabled ? alluserdetails ? alluserdetails.first_name : null : firstname}
                       
                  onChange={onTypeFirstName}
                  disabled={disabled}
              />
              <h5 className="fw-normal my-2">Last Name: </h5> 
                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? alluserdetails ? alluserdetails.last_name : null : lastname}
                  onChange={onTypeLastName}
                  disabled={disabled}
              />
            </div>
          </div>
        </div>
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
                  value={disabled ? alluserdetails ? alluserdetails.subjects1 : null : subjects1}
                  onChange={onTypeSubjects1}
                  disabled={disabled}
              />
                                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? alluserdetails ? alluserdetails.subjects2 : null : subjects2}
                  onChange={onTypeSubjects2}
                  disabled={disabled}
              />
                                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? alluserdetails ? alluserdetails.subjects3 : null : subjects3}
                  onChange={onTypeSubjects3}
                  disabled={disabled}
              />
                                <input
                  type="text"
                  className="form-control"
                  // placeholder={}
                  value={disabled ? alluserdetails ? alluserdetails.subjects4 : null : subjects4}
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
                  value={disabled ? alluserdetails ? alluserdetails.why_you_teach : null : whyyouteach}
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
                  value={disabled ? alluserdetails ? alluserdetails.fun_info : null : funinfo}
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
                  value={disabled ? alluserdetails ? alluserdetails.years_experience : null : yearsexperience}
                  onChange={onTypeYearsOfExperience}
                  disabled={disabled}
              />
            </div>
          </div>
        </div>
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
