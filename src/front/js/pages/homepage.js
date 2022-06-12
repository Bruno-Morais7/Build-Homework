import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center d-flex">
                <div className="col text-black rounded col-8" style="background-color:#e8f2ef">
                    <div className="col-6">
                        <h1 className="display-4 fst-italic">Prepare your lesson from Home</h1>
                        <p className="lead my-3">A platform that you can build you homework strategy from Home if you are a Teacher, or you can learning anything as a Student.</p>
                        <p className="lead mb-0"><Link  to="#" className="text-black fw-bold">Start your journey with the links below...</Link></p>
                        <br></br>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

                    <div className="row justify-content-center d-flex">
                        <div className="col-4 rounded border border-dark" style="height: 300px; background-color:#eef3fa">
                            <h1 style="text-align:center">TEACHERS</h1>
                            <br></br>
                            <h6 style="text-align:center">If your are a Registered Teacher or a Teacher that just wanna to joy us, click here to Log-in or sign-up</h6>
                        </div>
                        <div className="col-4 rounded border border-dark" style="height: 300px; background-color:#eef3fa;">
                            <h1 style="text-align:center">STUDENTS</h1>
                            <br></br>
                            <h6 style="text-align:center">If your are a Student click here to see all the content available or use the link that your teacher sended to go directly to your teacher page</h6>
                        </div>
                          
                    </div>

        </div>
                        
    );
};
