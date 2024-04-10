import React, { useState } from "react";
import "./Form.css";
import dribbleLogo from "../../assets/dribbleLogo.png";
import avtar from "../../assets/avatar.jpeg";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import CreateProfile from "../../Pages/CreateProfile/CreateProfile";
import ChooseRole from "../../Pages/ChooseReason/ChooseRole";
import VerifyEmail from "../../Pages/VerifyPage/VerifyEmail";

const FormSubmit = () => {
  let [page, setPage] = useState(0);
  const fromTitle = [
    "Welcome! Let's Create Your Profile",
    "What brings you to Dribble?",
    "Please Verify Your email...",
  ];
  const PageDisplay = () => {
    if (page === 0) {
      return <CreateProfile formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <ChooseRole formData={formData} setFormData={setFormData} />;
    } else {
      return <VerifyEmail formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div className="main">
      <div className="nav">
        <div>
          <img src={dribbleLogo} alt="" className="logo" />
        </div>
        <div>
          <div
            className="prev btn "
            disabled={page == 1}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            {"<"}
          </div>
        </div>
      </div>
      <div className="container d-flex-col">
        <div className="Form">
          <h2>{fromTitle[page]}</h2>
          <p>Let others get to know you better! You can do these later</p>
          <div className="imageUpload">
            <div className="section">
              <label className="fw-bold m-2" for="image">
                Add an avatar
              </label>
              <div className="mb-3">
                <img className="avtar" src={avtar} alt="" />
                <input
                  type="file"
                  className="custom-file-upload"
                  id="image"
                  name="image"
                  accept="image/*"
                />
              </div>
            </div>
            <div className="section">
              <label className="fw-bold" for="location">
                Add your location
              </label>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control buttomBorder"
                  placeholder="Ex: San Francisco"
                  id="location"
                />
              </div>
            </div>
            <div className="section mb-3">
              <button
                disabled={page == fromTitle.length - 1}
                className="buttonColor btn fw-bold mb-3 mt-3 w-25 "
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSubmit;
