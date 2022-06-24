import React from "react";
import avatar from "../../img/avatar.png";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Card = (props) => {
  const { store, actions } = useContext(Context);
  // const [teacherfoto, setTeacherfoto] = useState();

  // const getRandonPictureAPI = () => {
  //   // fetching data from the backend
  //   fetch("https://randomuser.me/api/")
  //     .then(respAPI => respAPI.json())
  //     .then((data) => setTeacherfoto(data))
  //     .catch(error => console.log("Error loading message from backend Lessons", error));
  //     console.log(teacherfoto)
  // }

  return (
    <div className="col">
      <div className="card" styles={"width: 18rem;"}>
        <img src={props.avatar} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {props.first_name} {props.last_name}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.subjects}</h6>
          <p className="card-text">{props.fun_info}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  subjects: PropTypes.string,
  fun_info: PropTypes.string,
  avatar: PropTypes.string,
};
