import React, { useState } from "react";
import "./CreateProfile.css";
import dribbleLogo from "../../assets/dribbleLogo.png";
import avtar from "../../assets/avatar.jpeg";
import { redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const CreateProfile = () => {
  let [page, setPage] = useState(0);
  const fromTitle = [
    "Welcome! Let's Create Your Profile",
    "What brings you to Dribble?",
    "Please Verify Your email...",
  ];
  return (
    <div className="main">
      <div className="nav">
        <div>
          <img src={dribbleLogo} alt="" className="logo" />
        </div>
      </div>
      <div className="container d-flex-col">
        <h2>Welcome! Let's Create Your Profile</h2>
        <p>Let others get to know you better! You can do these later</p>
        <div className="imageUpload">
          <form action="/user/newDetails" method="POST">
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
              <Link to="/chooseRole">
                <button
                  type="submit"
                  disabled={page == fromTitle.length - 1}
                  className="buttonColor btn fw-bold mb-3 mt-3 w-25 "
                  onClick={() => {
                    setPage((currPage) => currPage + 1);
                  }}
                >
                  Next
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
