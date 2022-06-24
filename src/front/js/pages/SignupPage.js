import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

import { Context } from "../store/appContext";

export const SignupPage = () => {
  const { store, actions } = useContext(Context);

/*const BASE_URL = "https://3001-brunomorais-teachandlea-s1906renosr.ws-eu47.gitpod.io/"*/
  const BASE_URL = process.env.BACKEND_URL
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [surnames, setSurnames] = useState();
  const [teacher, setTeacher] = useState();
  const [funinfo, setFuninfo] = useState();
  const [subjects, setSubjects] = useState();
  const [whyyouteach, setWhyyouteach] = useState();
  const [yearsexperience, SetYearsexperience] = useState();
  const [signupteacher, setSignupteacher] = useState(false);

  const onSubmitClicked = () => {
    console.log(" click and submit ");

    if (email && password && repeatPassword) {
      if (password === repeatPassword) {
        onFetchSignUp(email, password);
      } else {
        alert("the passwords have to be iqual");
      }
    } else {
      alert("information is missing");
    }
  };

  const onFetchSignUp = (email, password) => {
    const post = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    console.log("info login", post);

    fetch("", post)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onTypeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onTypeRepeatPassword = (e) => {
    console.log(e.target.value);
    setRepeatPassword(e.target.value);
  };

  const onTypeFirstname = (e) => {
    console.log(e.target.value);
    setFirstname(e.target.value);
  };

  const onTypeSurnames = (e) => {
    console.log(e.target.value);
    setSurnames(e.target.value);
  };

  const onTypeFunInfo = (e) => {
    console.log(e.target.value);
    setFuninfo(e.target.value);
  };

  const onTypeSubjects = (e) => {
    console.log(e.target.value);
    setSubjects(e.target.value);
  };

  const onTypeWhyYouTeach = (e) => {
    console.log(e.target.value);
    setWhyyouteach(e.target.value);
  };

  const onTypeYearsOfExperience = (e) => {
    console.log(e.target.value);
    SetYearsexperience(e.target.value);
  };

  const onTypeIsTeacher = (e) => {
    if (e.target.checked) {
      setTeacher(false);
    } else {
      setTeacher(true);
    }
    console.log(e.target.value);
    console.log(document.getElementById("confirm_teacher").value);
  };

  const signupForm = () => {
    console.log("teste")
    setSignupteacher(!signupteacher)

  }

  const postUserData1 = () => {
				
    if (signupteacher == false) {
      fetch((BASE_URL + "/api/users"), {
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "email": email,
          "password": password,
          "is_teacher": false,
        })
      })}
      else {
        fetch((BASE_URL + "/api/users"), {
          headers: {
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify({
            "email": email,
            "password": password,
            "is_teacher": true,
          })
        })
      }
    }

  const postStudentData1 = () => {

  fetch((BASE_URL + "/api/student"), {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      "email": email,
      "password": password,
      "first_name": firstname,
      "last_name": surnames,
    })
  })

}

const postTeacherData1 = () => {

  fetch((BASE_URL + "/api/teacher"), {
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      "email": email,
      "password": password,
      "first_name": firstname,
      "last_name": surnames,
      "subjects1": subjects1,
      "subjects2": subjects2,
      "subjects3": subjects3,
      "subjects4": subjects4,
      "fun_info": funinfo,
      "why_you_teach": whyyouteach,
      "years_experience": yearsexperience,
      "avatar": pic,
    })
  })

}


  const submit = () => {
    if (signupteacher == false) {
      postUserData1()
      postStudentData1() 
      window.location.reload()
      
    }
    else {
      postUserData1()
      postTeacherData1()
      window.location.reload()
    }

  }

  const [teacherfoto, setTeacherfoto] = useState();

  useEffect(() => {
		getRandonPictureAPI();
 	}, []);

  const getRandonPictureAPI = () => {
      fetch("https://randomuser.me/api/")
        .then(respAPI => respAPI.json())
        .then((data) => setTeacherfoto(data))
        .catch(error => console.log("Error loading message from backend Lessons", error));
    }
  };

  return (
    <>
      <br></br>
      <div className="container">
        <div className="col-md-5 mx-auto">
          <div className="myform">
            <div className="logo mb-3">
              <div className="col-md-12 text-center">
                <h3>{/* <i className="fa fa-user-plus fa-2x"></i> */}</h3>
                <h1>SignUp Form</h1>
              </div>
            </div>
            <form action="/Signuppage" method="post" name="registration" />
            <div className="form-group">
              {/* <label>Email address</label> */}
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={email}
                onChange={onTypeEmail}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>Password</label> */}
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                aria-describedby="password"
                placeholder="Enter Password"
                value={password}
                onChange={onTypePassword}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>Conform Password</label> */}
              <input
                type="Conform password"
                name="Conform password"
                id="confirm_password"
                placeholder="Confirm Password"
                minLength={7}
                maxLength={40}
                value={repeatPassword}
                onChange={onTypeRepeatPassword}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>Enter First Name</label> */}
              <input
                type="First Name"
                name="First Name"
                id="First_Name"
                className="form-control"
                aria-describedby="First Name"
                placeholder="Enter First Name"
                value={firstname}
                onChange={onTypeFirstname}
              />
            </div>
            <p></p>
            <div className="form-group">
              {/* <label>First Name</label> */}
              <input
                type="Surnames"
                name="Surnames"
                id="Surnames"
                className="form-control"
                aria-describedby="Surnames"
                placeholder="Enter Surnames"
                value={surnames}
                onChange={onTypeSurnames}
              />
            </div>
            <p></p>
            {/* <div>
              <label>
                <input
                  type="checkbox"
                  id="confirm_teacher"
                  value={teacher}
                  onChange={onTypeIsTeacher} /> If you are a Teacher click here
              </label>
            </div> */}
            
             <div className="col-md-12 text-center mb-3">       
                {signupteacher === true ? (
              <div>
               <div className="form-group">
              <input
                name="fun_info"
                className="form-control"
                id="fun_info"
                placeholder="Enter some Fun Information about You"
                maxLength={250}
                value={funinfo}
                onChange={onTypeFunInfo}
              />
            </div>
            <p></p>
            <div className="form-group d-flex gap-3 flex-wrap">
                    <input
                      name="subjects1"
                      className="form-control col-sm"
                      id="subjects1"
                      placeholder="Enter the"
                      maxLength={25}
                      value={subjects1}
                      onChange={onTypeSubjects1}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    {/* <label>Password</label> */}
                    <input
                      name="subjects2"
                      className="form-control col-sm"
                      id="subjects2"
                      placeholder="Subjects"
                      maxLength={25}
                      value={subjects2}
                      onChange={onTypeSubjects2}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    {/* <label>Conform Password</label> */}
                    <input
                      name="subjects3"
                      className="form-control col-sm"
                      id="subjects3"
                      placeholder="that You"
                      maxLength={25}
                      value={subjects3}
                      onChange={onTypeSubjects3}
                    />
                  </div>
                  <p></p>
                  <div className="form-group">
                    {/* <label>Enter First Name</label> */}
                    <input
                      name="subjects4"
                      className="form-control col-sm"
                      id="subjects4"
                      placeholder="Teach"
                      maxLength={25}
                      value={subjects4}
                      onChange={onTypeSubjects4}
                    />       
            </div>
            <p></p>
            <div className="form-group">
              <input
                name="why_you_teach"
                className="form-control"
                id="why_you_teach"
                placeholder="Enter a few words about Why You Teach"
                maxLength={250}
                value={whyyouteach}
                onChange={onTypeWhyYouTeach}
              />
            </div>
            <p></p>
            <div className="form-group">
              <input
                name="years_experience"
                className="form-control"
                id="years_experience"
                placeholder="Enter the Years Of Experience that You have"
                value={yearsexperience}
                maxLength={3}
                onChange={onTypeYearsOfExperience}
              />
            </div>
            <div className="col-md-12 text-center mb-3">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-warning tx-tfm"
                onClick={signupForm}
              >
                {signupteacher
                  ? "If You are only a Student Click Here"
                  : "If You are a Teacher Click Here"}
              </button>
            </div>

            <div className="col-md-12 text-center mb-3 ">
              <button
                type="submit"
                className=" btn btn-block mybtn btn-dark tx-tfm"
                onClick={submit}
              >
                submit
              </button>
            </div>
            {/* <div className="col-md-12 ">
              <div className="form-group">
                <p className="text-center">
                  <Link to="/LoginPage">
                    <span>Already have an account?</span>
                  </Link>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};
