import React from "react";
import screen from "../../img/screen.png";

export const Lessonworkspace = () => {
  return (
    <div>
      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex ">
        <div className="col-md-6 px-5">
          <h1 className="display-4 fst-italic">
            Welcome to the <b className="text-warning">Teacher Workplace</b>
          </h1>
          <div>
            <p className="lead mt-3 pt-3 ps-5">
              Build a small lesson to engage the students. <br />
              Don't forget... sometimes{" "}
              <b className="text-warning">less is more</b>!
            </p>
          </div>
        </div>
        <div className="col-md-6 px-5">
          <img className="img-fluid m-auto d-block w-75" src={screen} />
        </div>
      </div>

      {/* Form */}
      <form className="container-fluid">
        <div className="form-row d-flex container-fluid col-8 gap-4 flex-wrap my-4">
          <div className="form-group col">
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Suject
            </label>
            <input
              type="text"
              minLength={4}
              maxLength={30}
              className="form-control"
              placeholder="Subject of the lesson"
            />
          </div>
          <div className="form-group col">
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Title
            </label>
            <input
              type="text"
              minLength={4}
              maxLength={40}
              className="form-control"
              placeholder="Title of the lesson"
            />
          </div>
          <div className="form-group col">
            <label className="fs-3 ms-4 mb-2 border-bottom border-warning border-3">
              Professor
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              disabled
            />
          </div>
        </div>
        <div className="form-group mx-auto col-10 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Introduction
          </label>
          <textarea
            type="textarea"
            minLength={20}
            maxLength={250}
            className="form-control"
            rows="3"
            placeholder="What will be adressed.
              Importance, why and how."
          />
        </div>
        <div className="form-group mx-auto col-10 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Main Part
          </label>
          <textarea
            type="textarea"
            minLength={300}
            maxLength={6000}
            className="form-control"
            rows="10"
            placeholder="Content (don't forget that it should be a short lesson [20min])."
          />
          {/* <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea> */}
        </div>
        <div className="form-group mx-auto col-10 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Summary
          </label>
          <textarea
            type="text"
            minLength={40}
            maxLength={250}
            className="form-control mb-2"
            rows="2"
            placeholder="Resume the information in a line...or 2."
          />
        </div>
        <div className="form-group mx-auto col-8 my-4">
          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Keyword
          </label>
          <div className="d-flex gap-5">
          <input
            type="text"
            maxLength={20}
            className="form-control mb-2"
            placeholder="Place a keyword"
          />
          <input
            type="text"
            maxLength={20}
            className="form-control mb-2"
            placeholder="or 2"
          />
          <input
            type="text"
            maxLength={20}
            className="form-control mb-2"
            placeholder="or 3"
          />
          </div>
        </div>
        <div className="form-group mx-auto col-8">

          <label className="fs-2 ms-4 mb-2 border-bottom border-warning border-3">
            Assessment
          </label>
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            placeholder="Ask for your students to bring some answers to class"
          />
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            placeholder="Make a few questions"
          />
          <input
            type="text"
            maxLength={110}
            className="form-control mb-2"
            placeholder="Ask them to bring them to class"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Nice way to build a Homework"
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-warning fs-5 px-5 my-5">
            Submit
            {/* Submit function */}
          </button>
        </div>
      </form>

      {/* Form */}
      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex">
        <div className="col-md-6 px-5">
          <img className="img-fluid mx-auto d-block" />
        </div>
        <div className="col-md-6 px-5">
          <h3 className="display-5 fst-italic">
            Well <b className="text-warning">done</b>!!!
          </h3>
          <div>
            <p className="lead mt-3 pt-3 ps-5 fst-italic">
              Time to share it with your students... or not.
            </p>
            <p className="lead ps-5 ms-5 fst-italic">
              Copy this <a className="underline">"url to copy"</a> and send it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
