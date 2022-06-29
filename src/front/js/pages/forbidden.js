import React from "react";
import { Link } from "react-router-dom";
import cool403 from "../../img/cool403.png"
import "../../styles/style.css";

export const Forbidden = () => {
    return (
        <div className="container-fluid text-center">
            <Link to="/"><img className="img-fluid mx-auto d-block mt-5 mb-3 magicBorder" src={cool403} /></Link>
            <p className="text-muted mb-5 lead fs-4">You tried to access a page <b className="text-danger">you don't have permission</b> to see. <br />Click on the image to get back Home! </p>
        </div>
    )
}