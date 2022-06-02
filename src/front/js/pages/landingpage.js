import React from "react";
import "../../styles/home.css";
import "../../styles/index.css";

export const LandingPage = () => {
  return (
    <div className="bgColor">

    <div className="container-fluid col-8">
      <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid py-3">
          <h1 className="display-5 fw-bold">HomeWork</h1>
          <h2>
            Small work...
            <br /> big defference!
          </h2>
          <p className="col-md-6 fs-4">
            Get your Students ready for class. <br />
            Engage their curiosity!
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Find out more?!
          </button>
        </div>
      </div>

      <div className="row align-items-md-stretch pb-5">
        <div className="col-md-6">
          <div className="h-100 p-5 text-white bg-dark rounded-3">
            <h2>Teacher</h2>
            <ul>
              <li>Share classes with your Students</li> 
              <li>Engage your students for next</li>
              <li>Lesson Make Homework count</li>
              <li>Help students recover lost content</li>
            </ul>
            <button className="btn btn-outline-light" type="button">
              Try this Tool
            </button>
          </div>
        </div>

        <div className="col-md-6">
          <div className="h-100 p-5 bg-light border rounded-3">
            <h2>Student</h2>
            <ul>
              <li>Find teachers that teach your way</li>
              <li>Get resume content that will help you get better</li>
              <li>Be better prepared for classes</li>
              <li>Engage your curiosity</li>
            </ul>
            <button className="btn btn-outline-secondary" type="button">
              I want to learn more!
            </button>
          </div>
        </div>
      </div>

      <div className=" rounded-3 py-3">
        <div className="container-fluid ">
        <div className="d-flex row pb-5">
        <div className="col-md-4 float-start flex-grow-1">IMAGEM 🟢</div>

          <div className="col-md-8 float-end">
          <h2 className="fw-bold">What is our goal? ❤</h2>
          <ul className="fs-5">
            <li>Generate small lessons or homework using our template</li>
            <li>Tests control the students evolution and the quality of your lesson</li>
            <li>Save and organize your lessons</li>
            <li>Use it in class and your students can teach each other</li>
            <li>Get inspired by the community</li>
          </ul>
          <button className="btn btn-primary btn-lg" type="button">
            Show me more!
          </button>
          </div>
        </div>
        </div>
      </div>

    </div>

    </div>
  );
};
