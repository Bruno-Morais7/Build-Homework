import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Lessoncard } from "./lessoncard";
import PropTypes from "prop-types";
import avatar from "../../img/avatar.png";
import "../../styles/style.css";

function SearchBarLesson({ placeholder, lessonData }) {
  const { store, actions } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = lessonData.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search container-fluid col-12">
      <div className="searchInputs justify-content-center container-fluid col-8">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <i className="fa-solid fa-magnifying-glass text-dark"></i>
          ) : (
            <i
              className="fa-solid fa-xmark text-dark"
              id="clearBtn"
              onClick={clearInput}
            ></i>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="row row-cols-xs-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 gap-2 justify-content-center">
          {filteredData.slice(0, 10).map((value, key) => {
            return (
              <div className="" href={value.id} target="" key={value.id}>
                <Link to="/lesson" className="link-dark">
                  <div
                    onClick={() => {
                      actions.onClickSaveLessonId(value.id);
                    }}
                  >
                    <Lessoncard
                      title={value.title}
                      subject={value.subject}
                      summary={value.summary}
                    />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBarLesson;

Lessoncard.propTypes = {
  title: PropTypes.string,
  subject: PropTypes.string,
  summary: PropTypes.string,
};
