import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/style.css";
import { BASE_URL } from "../store/flux";
import { useHistory } from "react-router-dom";

export const LoginPage = ({ setToken }) => {
  const history = useHistory();
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onTypeEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const onTypePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const onSubmitClicked = (e) => {
    e.preventDefault();
    if (email && password) {
      // fetch
      onFetchLogIn(email, password);
    } else {
      //all
      alert("incorrect details ");
    }
  };

  const onFetchLogIn = (email, password) => {
    // fetch
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers":
          "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
      crossDomain: true,
      redirect: "follow",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(BASE_URL + "/api/login", post)
      .then((resp) => resp.json())
      .then((dataUsers) => {
        console.log(dataUsers);
        if (dataUsers?.access_token) {
          localStorage.setItem("token", dataUsers.access_token);
          setToken(dataUsers.access_token);
          history.push("/landingpage");
        }
        //   setStore({
        //     users: [...getStore().users, dataUsers],
        //   });
      })
      .catch((error) => {
        console.log(error);
      });

    //const requestData = {
    // email: email,
    // password: password,
    //}

    //const options = {
    // method: 'post',
    //headers: {
    //  'Accept': 'application/json, text/plain, */*',
    /// 'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(requestData)
    //}

    //fetch(BASE_URL+"/api/users", options)
    // .then(response => {
    //  console.log(response)
    // if (response.ok) {
    //   return response.json();
    //  } else {
    //   throw new Error('Something went wrong ...');
    // }
    // })
    //.then(data => {
    //   console.log(data);
    // })
    //.catch(error => {
    //  console.error(error);
    // });

    // axios.post(BASE_URL+"/api/users",requestData)
    // .then(response =>{
    //   console.log(response);
    // }).catch(error =>{
    //   console.error(error);
    // })
  };

  // postUsersData: () =>

  //   	fetch("https://3001-brunomorais-buildhomewo-nt2arfayahh.ws-eu47.gitpod.io/api/users", {method: "POST"})

  //   		.then(resp => resp.json())
  //   	.then(dataUsers => setStore({
  //   		users: [...getStore().users, dataUsers]
  //   	 }))

  //   		.catch(error => console.log("Error loading message from backend Users", error));

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <div id="first">
              <div className="myform">
                <div className="logo mb-3">
                  <div className="col-md-12 text-center">
                    <h3>
                      <i className="fa fa-user fa-4x"></i>
                    </h3>
                    <h1>Login</h1>
                  </div>
                </div>
                <form>
                  <div className="form-group">
                    <label htmlFor="InputEmail1">Email address</label>
                    <input
                      type="Email"
                      name="Email"
                      className="form-control"
                      id="Email"
                      aria-describedby="Email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={onTypeEmail}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="InputPassword">Password</label>
                    <input
                      type="Password"
                      name="Password"
                      id="Password"
                      className="form-control"
                      aria-describedby="Password"
                      placeholder="Enter Password"
                      value={password}
                      onChange={onTypePassword}
                    />
                  </div>
                  <div className="col-md-12 text-center ">
                    <button
                      type="submit"
                      className=" btn btn-block mybtn btn-primary tx-tfm"
                      onClick={onSubmitClicked}
                    >
                      Continue
                    </button>
                  </div>
                  <div className="col-md-12 ">
                    <div className="login-or">
                      <hr className="hr-or" />
                      <span className="span-or">or</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <p className="text-center">
                      Don't have account?{" "}
                      <Link to="/SignupPage">
                        <label id="signup">Sign up here</label>
                      </Link>
                    </p>
                  </div>
                  <div className="form-group">
                    <p className="text-center">
                      <Link to="/ForgetPassword">
                        <label id="Forget">Forget Password</label>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
