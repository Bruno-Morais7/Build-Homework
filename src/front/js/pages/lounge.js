import React from "react";
import { Card } from "../component/card";
import { Lessoncard } from "../component/lessoncard";
import couch from "../../img/couch.png";
import balloon from "../../img/balloon.png";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import PropTypes from "prop-types";


export const Lounge = () => {
  const { store, actions } = useContext(Context);
  const listOfLessons = store?.lessons?.[0]?.lessons.map((lesson, index) => {
   
    return (
      <div key={index}>
        <Lessoncard title={lesson.title}
          subject={lesson.subject}
          summary={lesson.summary}/>
      </div>
    )
  })

  const listOfTeachers = store?.teachers?.[0]?.teachers.map((teacher, indexT) => {
    
    return (
      <div key={indexT}>
        <Card first_name={teacher.first_name}
        last_name={teacher.last_name}
        subjects={teacher.subjects}
        fun_info={teacher.fun_info} />
      </div>
    )
  })

  return (
    <div className="container-fluid">
      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex row flex-lg-wrap">
        <div className="col-md-6 px-5">
          <h1 className="display-4 fst-italic">
            Welcome to the <b className="text-warning">Lounge</b>
          </h1>
          <div>
            <p className="lead mt-3 pt-3 ps-5">Take your time!</p>
            <p className="lead ps-5 ms-5">
              Have a sit, chose a lesson or a teacher
            </p>
          </div>
        </div>
        <div className="col-md-6 px-5">
          <img className="img-fluid mx-auto d-block" src={couch} />
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="container-fluid col-8 fst-italic pt-5">
          Here you can search for <b className="text-warning">the one</b> or the
          many...
        </h2>
        <h5 className="container-fluid col-8 fst-italic mt-4 mb-5 d-flex justify-content-end">
          Click on the teacher to see the work
        </h5>
        <div className="container-fluid col-10 pb-3">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3 pb-5">
            {listOfTeachers}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <h2 className="container-fluid col-8 fst-italic pt-5 border-top">
          Time to find something <b className="text-warning">to study</b> or
          just to have some fun...
        </h2>
        <h5 className="container-fluid col-8 fst-italic mt-4 mb-5 d-flex justify-content-end">
          Check the latest lessons available
        </h5>
        <div className="container-fluid col-10">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5 g-3 pb-5">
            {listOfLessons}
          </div>
        </div>
      </div>
        <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex row flex-lg-row">
          <div className="col-md-6 px-5">
            <img className="img-fluid mx-auto d-block" src={balloon} />
          </div>
          <div className="col-md-6 px-5">
            <h3 className="display-5 fst-italic">
              No more <b className="text-warning">content</b> here
            </h3>
            <div>
              <p className="lead mt-3 pt-3 ps-5 fst-italic">Time to go up</p>
              <p className="lead ps-5 ms-5 fst-italic">
                hope you find something on the way
              </p>
            </div>
          </div>
        </div>
        </div>
      
    
  );
};
