import React from "react";
import avatar from "../../img/avatar.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="col">
    <div className="card" styles={"width: 18rem;"}>
    <img src={avatar} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{props.first_name} {props.last_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.subjects}</h6>
        <p className="card-text">
          {props.fun_info}
        </p>
        <Link to="#" className="card-link">
          Professor's Catlogue/Page
        </Link>
      </div>
    </div>
    </div>
  );
};

Card.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  subjects: PropTypes.string,
  fun_info: PropTypes.string
}
