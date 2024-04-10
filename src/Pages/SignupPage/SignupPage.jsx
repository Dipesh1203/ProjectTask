import React from "react";
import SignupForm from "../../components/SignupFrom/SignupForm.jsx";
import "./SignupPage.css";
import sideimage from "../../assets/sideimg.jpg";

const SignupPage = () => {
  return (
    <div className="row">
      <div className="col col-xs col-md-4 imagediv">
        <img className="image" src={sideimage} alt="" />
      </div>
      <div className="col form">
        <SignupForm className="sideForm" />
      </div>
    </div>
  );
};

export default SignupPage;
