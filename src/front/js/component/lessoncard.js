import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Lessoncard = (props) => {
  
  return (
    <div className="col">
    <div className="card"> {/* styles={"width: 18rem;"}> */}
    {/* <img src={avatar} className="card-img-top" alt="..."/> */}
      <div className="card-body text-center">
        <h5 className="card-title pb-2 border-bottom border-warning">{props.title}</h5>
        <h6 className="card-subtitle py-2 text-muted">{props.subject}</h6>
        <p className="card-text bg-light p-3 rounded-3">
         {props.summary}
        </p>
        {/* <Link to="#" className="card-link">
          {props.link_lesson}
        </Link> */}
      
      </div>
    </div>
    </div>
  );
};

Lessoncard.propTypes = {
  title: PropTypes.string,
  subject: PropTypes.string,
  summary: PropTypes.string,

}