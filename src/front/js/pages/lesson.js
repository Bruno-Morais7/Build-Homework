import React from "react";
import "../../styles/index.css";
import checkmark from "../../img/checkmark.png";

export const Lesson = () => {
  return (
    <div>
      <div className="p-4 p-md-5 text-white rounded bg-dark mb-4">
        <h1 className="container-fluid col-8">
          Time to <b className="text-warning">study</b>.
        </h1>
      </div>

      <div className="d-flex container-fluid col-10">
        <div className="row align-items-md-stretch text-center flex-fill">
          <div className="col-md-4">
            <div className="h-100 p-5">
              <h2 className="border-bottom border-warning pb-1 border-2">
                Subject
              </h2>
              <p>Dragon Ball</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2 className="border-bottom text-warning pb-1 border-2">
                Title
              </h2>
              <p className="text-warning">Dragon Ball Z Theory</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="h-100 p-5 rounded-3">
              <h2 className="border-bottom border-warning pb-1 border-2">
                Teacher
              </h2>
              <p>Every 80's Kid</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-8 py-4">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Introduction
          </h1>
        </div>
        <p className="container-fluid col-10 fs-4 border-start mb-5">
          What will be adressed. <br />
          Importance, why and how.
        </p>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-8 py-4 bg-dark text-white rounded-3">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Main content
          </h1>
        </div>
        <p className="container-fluid col-10 fs-4 border-start mt-4 mb-5">
          Content (don't forget that it should take a max of 20m to read)
        </p>
      </div>

      <div className="container-fluid">
        <div className="container-fluid col-8 py-4">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Summary
          </h1>
        </div>
        <div className="container-fluid col-10 fs-4 border-start mb-5">
          3 Bullets with one word would be perfect
          <ul>
            <li>one</li>
            <li>two</li>
            <li>tree</li>
          </ul>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid col-8 py-4 bg-dark text-white rounded-3">
          <h1 className="border-bottom border-warning border-2 pb-1">
            Assessment
          </h1>
        </div>

        <div className="container-fluid col-10 fs-4 border-start mt-4 mb-5">
          Ask for your students to bring some answers to class
          <ul>
            <li>Question one</li>
            <li> Question two</li>
            <li>Question tree</li> <li>Question four</li>
          </ul>
        </div>
      </div>

      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex">
        <div className="container-fluid col-8 d-flex gap-4 justify-content-end">
          <img className="img-fluid smaller my-auto" width={"77rem"} src={checkmark}></img>
          <h2 className="text-end">
            Congratutlations, this is <b className="text-warning">the end</b> of
            the lesson <br /> and now you know it{" "}
            <span className="text-warning">all</span>
          </h2>
        </div>
      </div>
    </div>
  );
};