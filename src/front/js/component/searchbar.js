import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./card";
import PropTypes from "prop-types";
import avatar from "../../img/avatar.png";
import "../../styles/style.css";

function SearchBar({ placeholder, data }) {
  const { store, actions } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      const fullName = value.first_name + " " + value.last_name;
      return (
        value.first_name.toLowerCase().startsWith(searchWord.toLowerCase()) ||
        value.last_name.toLowerCase().includes(searchWord.toLowerCase()) ||
        fullName.toLowerCase().startsWith(searchWord.toLowerCase())
      );
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
      <div className="searchInputs justify-content-center container-fluid col-10">
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
                <Link to="/teacherpage">
                  <div
                    onClick={() => {
                      actions.onClickSaveTeacherId(value.id);
                    }}
                  >
                    <Card
                      avatar={value.avatar}
                      first_name={value.first_name}
                      last_name={value.last_name}
                      subjects={value.subjects}
                      fun_info={value.fun_info}
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

export default SearchBar;

Card.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  subjects: PropTypes.string,
  fun_info: PropTypes.string,
  avatar: PropTypes.string,
};
