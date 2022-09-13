import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import "../../styles/style.css";
import validator from "validator";

import { Context } from "../store/appContext";

export const SignupPage = () => {
  const { store, actions } = useContext(Context);

  /*const BASE_URL = "https://3001-brunomorais-teachandlea-s1906renosr.ws-eu47.gitpod.io/"*/

  const BASE_URL = process.env.BACKEND_URL;

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [surnames, setSurnames] = useState("");
  const [teacher, setTeacher] = useState();
  const [funinfo, setFuninfo] = useState("");
  const [subjects1, setSubjects1] = useState("");
  const [subjects2, setSubjects2] = useState("");
  const [subjects3, setSubjects3] = useState("");
  const [subjects4, setSubjects4] = useState("");
  const [whyyouteach, setWhyyouteach] = useState("");
  const [yearsexperience, SetYearsexperience] = useState("");
  const [signupteacher, setSignupteacher] = useState(false);
  const [checked, setChecked] = useState(false);

  const onSubmitClicked = () => {

    if (email && password && repeatPassword) {
      if (password === repeatPassword) {
        onFetchSignUp(email, password);
      } else {
        alert("passwords must match");
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


    fetch("", post)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const onTypeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    setPassword(e.target.value);
  };

  const onTypeRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const onTypeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const onTypeSurnames = (e) => {
    setSurnames(e.target.value);
  };

  const onTypeFunInfo = (e) => {
    setFuninfo(e.target.value);
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
    SetYearsexperience(e.target.value);
  };

  const onTypeIsTeacher = (e) => {
    if (e.target.checked) {
      setTeacher(false);
    } else {
      setTeacher(true);
    }

  };

  const signupForm = () => {
    setSignupteacher(!signupteacher);
  };

  const postUserData1 = () => {
    if (signupteacher == false) {
      fetch(BASE_URL + "/api/users", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          is_teacher: false,
        }),
      });
    } else {
      fetch(BASE_URL + "/api/users", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          is_teacher: true,
        }),
      });
    }
  };

  const postStudentData1 = () => {
    fetch(BASE_URL + "/api/student", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstname,
        last_name: surnames,
        avatar: pic,
      }),
    });
    history.push("/loginpage");
  };

  const postTeacherData1 = () => {
    fetch(BASE_URL + "/api/teacher", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstname,
        last_name: surnames,
        subjects1: subjects1,
        subjects2: subjects2,
        subjects3: subjects3,
        subjects4: subjects4,
        fun_info: funinfo,
        why_you_teach: whyyouteach,
        years_experience: yearsexperience,
        avatar: pic,
      }),
    });
    history.push("/loginpage")
  };

  const submit = () => {
    if (!email.trim() || !password || !repeatPassword) {
      return alert("Fill the all information");
    }

    if (
      !password.trim() ||
      !validator.isStrongPassword(password, {
        minLength: 8,
        maxLength: 16,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      return alert(`The password must contain these
      minLength: 8
      maxLength: 16
      minLowercase: 1
      minUppercase: 1
      minNumbers: 1
      minSymbols: 1 `);
      // setEmailError("Enter valid Email!");
    }

    console.log(validator.equals(password, repeatPassword));

    if (!validator.equals(password, repeatPassword)) {
      alert("password must match!");
      return;
    }

    if (signupteacher == false) {
      postUserData1();
      postStudentData1();
      // window.location.reload();
    } else {
      postUserData1();
      postTeacherData1();
      // window.location.reload();
    }
  };

  const [teacherfoto, setTeacherfoto] = useState();

  useEffect(() => {
    getRandonPictureAPI();
  }, []);

  const getRandonPictureAPI = () => {
    fetch("https://randomuser.me/api/")
      .then((respAPI) => respAPI.json())
      .then((data) => setTeacherfoto(data))
      .catch((error) =>
        console.log("Error loading message from backend Lessons", error)
      );
  };

  const pic = teacherfoto?.results[0].picture.large;

  return (
    <>
      <div className="container-fluid col-10 justify-content-center bg-dark text-white rounded-3 maxsize">
          <div className="myform px-5 p-5">
              <div className="mx-auto py-4 mb-1 text-center col-md-6">
                <h3>
              <i className="fa-solid fa-user-plus fa-3x text-warning"></i>
              </h3>
                <h1>SignUp</h1>
              </div>
            <form action="/Signuppage" method="post" name="registration"/>
            <div className="form-group py-2">
              <input
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                minLength={10}
                maxLength={100}
                value={email}
                onChange={onTypeEmail}
              />
            </div>
            <p></p>
            <form className="form-group py-2">
              <input
                name="password"
                type={checked ? "Text" : "Password"}
                className="form-control"
                id="password"
                placeholder="Enter Password"
                minLength={7}
                maxLength={40}
                value={password}
                onChange={onTypePassword}
              />
            </form>
            <p></p>
            <form className="form-group py-2">
              <input
                type={checked ? "Text" : "Password"}
                name="Confirm password"
                className="form-control"
                id="confirm_password"
                placeholder="Confirm Password"
                minLength={7}
                maxLength={40}
                value={repeatPassword}
                onChange={onTypeRepeatPassword}
              />
              <input type="checkbox" className="ms-2 mt-2" onClick={() => setChecked(!checked)} />
              <span className="ms-1 mt-2">Show Password</span>
            </form>

            <p></p>
            <div className="form-group py-2">
              <input
                name="First Name"
                className="form-control"
                id="First_Name"
                placeholder="Enter First Name"
                minLength={4}
                maxLength={30}
                value={firstname}
                onChange={onTypeFirstname}
              />
            </div>
            <p></p>
            <div className="form-group py-2">
              <input
                name="Surnames"
                className="form-control"
                id="Surnames"
                placeholder="Enter Surnames"
                minLength={4}
                maxLength={50}
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
                  <div className="form-group py-2">
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
                  <div className="form-group py-2 d-flex gap-4 flex-wrap">
                    <input
                      name="subjects1"
                      className="form-control col-sm"
                      id="subjects1"
                      placeholder="Enter the"
                      maxLength={25}
                      value={subjects1}
                      onChange={onTypeSubjects1}
                    />
                    <input
                      name="subjects2"
                      className="form-control col-sm"
                      id="subjects2"
                      placeholder="subjects"
                      maxLength={25}
                      value={subjects2}
                      onChange={onTypeSubjects2}
                    />
                    <input
                      name="subjects3"
                      className="form-control col-sm"
                      id="subjects3"
                      placeholder="you"
                      maxLength={25}
                      value={subjects3}
                      onChange={onTypeSubjects3}
                    />
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
                  <div className="form-group py-2">
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
                  <div className="form-group py-2">
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
                </div>
              ) : null}
            </div>
            <div className="col-md-12 text-center mt-4 mb-4">
              <button
                type="submit"
                className="btn btn-block btn-warning"
                onClick={signupForm}
              >
                {signupteacher
                  ? "I am a Student!"
                  : "I am a Teacher!"}
              </button>
            </div>
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className=" btn btn-block btn-dark border"
                onClick={submit}
              >
                Submit
              </button>
            </div>
          </div>
        
      </div>
    </>
  );
};
