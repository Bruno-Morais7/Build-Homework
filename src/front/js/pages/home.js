import React, { useContext } from "react";
// import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import idea from "../../img/idea.png";
import template from "../../img/template.png";
import assessment from "../../img/assessment.png";
// import community from "../../img/community.png";
import tlcr from "../../img/tlcr.jpg";

export const Home = () => {
  // const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="p-5 text-white rounded bg-dark d-flex row flex-lg-wrap justify-content-center">
        <div className="text-center justify-content-center">
          <h1 className="display-3 fst-italic mb-5">
            <b className="text-warning">Teach</b>{" "}
            <span className="fs-1">&</span>{" "}
            <b className="text-warning">Learn</b>
          </h1>
          <h1 className=" fst-italic">
            Learn and Teach what you want... or need...
          </h1>
          <h1 className="fst-italic p-2 pb-3">
            Help students by teaching what you know!
          </h1>
        </div>
      </div>
      <h1 className="m-5 p-2 display-5 text-center">
        <b className="border-bottom border-warning border-3">
          {" "}
          &nbsp; Start your Journey &nbsp;
        </b>
      </h1>
      <div className="container-fluid col-8 d-flex my-5 justify-content-center gap-5 fs-3 lead">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <div>
              <h2 className="mb-4 text-center">
                You are already a{" "}
                <span className="text-warning fw-bold fst-italic">
                  Teacher!?
                </span>
              </h2>
              <span className=""> Great! Help the community. </span>
              <br />
              <span>
                {" "}
                Create some Lessons in the{" "}
                <Link to="/lessonworkspace">
                  <b>Workspace</b>
                </Link>
                .
              </span>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2 className="mb-4 text-center">
              Are you a{" "}
              <span className="text-warning fw-bold fst-italic">Student?</span>
            </h2>
            <span>
              {" "}
              Good, search the{" "}
              <Link to="/lounge">
                <b className="">Lounge</b>
              </Link>{" "}
              for what you need to learn or something you like.
            </span>
          </div>
        </div>
      </div>
      <div className="bg-dark p-5 border rounded-3">
        <h1 className="p-2 display-5 text-center">
          <b className="border-bottom border-warning border-3 text-light">
            {" "}
            &nbsp; Why you should use this platform? &nbsp;
          </b>
        </h1>
        <div className="container-fluid col-10 d-flex my-5 justify-content-center gap-5 fs-5">
          <div className="col-md-6">
            <div className="h-100 p-5 bg-white rounded-3">
              <div>
                <h2 className="mb-4 text-center">
                  As a{" "}
                  <span className="text-warning fw-bold fst-italic">
                    Teacher
                  </span>
                </h2>

                <ul className="list-group list-group-flush mb-3">
                  <li className="list-group-item">
                    Prepare and share lessons with students everywhere
                  </li>
                  <li className="list-group-item">
                    Engage your students for the classes
                  </li>
                  <li className="list-group-item">
                    Build Homework from home and share it
                  </li>
                  <li className="list-group-item">
                    Help students recover lost content
                  </li>
                </ul>
                <Link to="/lessonworkspace">
                  <button
                    className="btn btn-dark fs-5 float-end mb-5"
                    type="button"
                  >
                    Try the Tool
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2 className="mb-4 text-center">
                As a{" "}
                <span className="text-warning fw-bold fst-italic">Student</span>
              </h2>
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item bg-light">
                  {" "}
                  Find different approaches to learn the subject
                </li>
                <li className="list-group-item bg-light">
                  Get resume content to help you prepare
                </li>
                <li className="list-group-item bg-light">
                  Check your Homework in a few clicks
                </li>
                <li className="list-group-item bg-light">
                  Engage your curiosity,{" "}
                  <u className="text-muted">Learn Anything</u>
                </li>
              </ul>
              <Link to="/lounge">
                <button
                  className="btn btn-outline-secondary fs-5 float-end mb-5"
                  type="button"
                >
                  I want to Learn!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="m-5 p-2 display-5 text-center">
        <b className="border-bottom border-warning border-3">
          {" "}
          &nbsp; What we provide to help you improve! &nbsp;
        </b>
      </h1>
      <div className="container-fluid d-flex mb-5 justify-content-center gap-5">
        <div className="col-3 card border-0">
          <img
            className="img-fluid mx-auto d-block img-thumbnail"
            height={"170rem"}
            src={template}
          />
          <div className=" card-title text-center fs-4 mt-2">
            <u className="">Lesson Template</u>
          </div>
          <div className="card-text">
            <ul className="list-group list-group-flush mb-3 mx-auto">
              <li className="list-group-item">
                Simple structure to use and easy understand.
              </li>
              {/* Engage your students for their next classes. */}
              <li className="list-group-item">
                {" "}
                Limited space for resumed content.{" "}
              </li>
              <li className="list-group-item">
                {" "}
                Create and organize your lessons... and reuse them
              </li>
            </ul>
          </div>
        </div>
        <div className="card col-3 border-0">
          <img
            className="img-fluid mx-auto d-block img-thumbnail"
            width={"125rem"}
            src={assessment}
          />
          <div className="card-title text-center fs-4 mt-2">
            <u>Assessment Possibility</u>
          </div>
          <div>
            <ul className="list-group list-group-flush mb-3 mx-auto">
              <li className="list-group-item">
                Prepare a homework strategy with your lessons
              </li>
              <li className="list-group-item">
                Build questions to control the expected results
              </li>
              <li className="list-group-item">
                Quality control for your lessons
              </li>
              <li className="list-group-item">Small work...big defference!</li>
            </ul>
          </div>
        </div>
        <div className="card col-3 border-0">
          <img
            className="img-fluid mx-auto d-block img-thumbnail"
            width={"125rem"}
            src={tlcr}
          />
          <div className="card-title text-center fs-4 mb-2">
            <u>Tool to Learn & Teach</u>
          </div>
          <div className="card-text">
            <ul className="list-group list-group-flush mb-3 mx-auto">
              <li className="list-group-item">
                Engage your students for their next classes.
              </li>
              <li className="list-group-item">
                Resume what you learn and study everywhere.
              </li>
              <li className="list-group-item">
                Use it as a tool for students to teach each other.
              </li>
              <li className="list-group-item">
                Get inspired by the community and inspire them.
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="col-3">
          <img className="img-fluid m-auto d-block" width={"140rem"} src={community} />
          <div className="text-center fs-4"> A community </div>
          <div>
            <li>A Place to get inspired</li>
          </div>
        </div> */}
      </div>

      {/* If you learned something you can Teach. Try it!  */}

      <div className="container-fluid ">
        <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex row flex-lg-row">
          <div className="col-md-4 px-5">
            <img
              className="img-fluid m-auto d-block"
              width={"230rem"}
              src={idea}
            />
          </div>
          <div className="col-md-8 px-5 fst-italic">
            <h5 className="display-6">
              Use the platform to Teach... and Learn...{" "}
              <p className="ms-5 mt-2">
                {" "}
                and if learned something you can try and teach it. Your own way!
              </p>
              <p className="ps-5 ms-5 mt-2">
                Teaching and resuming information is a great way to Learn...
                <b className="text-warning">
                  so Teach and Learn ...and Learn and Teach!
                </b>
              </p>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
