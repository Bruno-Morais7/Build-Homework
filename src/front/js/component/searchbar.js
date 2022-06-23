import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"
import "../../styles/style.css";

function SearchBar({ placeholder, data }) {
  const { store, actions } = useContext(Context);
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.first_name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(filteredData);
  };
  console.log(data);

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  return (
    <div className="search">
      <div className="searchInputs">
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
        <div className="">
          {filteredData.slice(0, 5).map((value, key) => {
            return (
              <div
                className="dataItem"
                href={value.id}
                target="_blank"
                key={value.id}
              >
                <Link to="/teacherpage">
                  <div
                    onClick={() => {
                      let saveTeacherId = value.id;
                      console.log(value.id);
                      actions.onClickSaveTeacherId(value.id);
                    }}
                  >
                    <p>{value.first_name} </p>
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
