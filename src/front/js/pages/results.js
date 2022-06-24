import React from "react";
import { Card } from "../component/card";
import { Lessoncard } from "../component/lessoncard";
import search from "../../img/search.png";
import change from "../../img/change.png";
import { useContext } from "react";
import { Context } from "../store/appContext";
import SearchBar from "../component/searchbar";
import "../../styles/style.css";

export const Results = () => {
  const { store, actions } = useContext(Context);
  const lessonData = store?.lessons?.[0]?.lessons;
  const teacherData = store?.teachers?.[0]?.teachers;
  const data = teacherData;
  return (
    <div>
      <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex ">
        <div className="col-md-6 px-5">
          <h1 className="display-4 fst-italic">
            <b className="text-warning">Search</b> and you'll{" "}
            <b className="text-warning">find</b>.
          </h1>
          <div className="searchbar">
                <SearchBar
                  placeholder="Search by Name or Title..."
                  data={data}
                />
              </div>
          <div>
            <p className="lead mt-3 pt-3 ps-5">
              These are your results
              <br />
              <b className="text-warning">Enjoy!</b>!
            </p>
          </div>
        </div>
        <div className="col-md-6 px-5">
          <img
            className="img-fluid m-auto d-block"
            src={search}
            width="200rem"
          />
        </div>
      </div>

      <div className="album p-5">
        <div className="container-fluid">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
            <div className="col">
              <Lessoncard />
            </div>
            <div className="col">
              <Card />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ">
        <div className="p-4 p-md-5 pb-4 text-white rounded bg-dark d-flex row flex-lg-row">
          <div className="col-md-4 px-5">
            <img
              className="img-fluid float-end"
              width={"100rem"}
              src={change}
            />
          </div>
          <div className="col-md-8 px-5 lead">
            <h3 className="fs-2 fst-italic text-end">
              Didn't find what you were looking for? <br /> Change something on
              the <b className="text-warning">Search</b>!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
