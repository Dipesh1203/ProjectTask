import { useState } from "react";
import React from "react";
import "./SignupForm.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div className="main">
      <form
        action="/user/new"
        method="POST"
        className="m-3 p-3 needs-validation"
      >
        <h2 className="fw-bold">Sign up to Dribble</h2>
        <div className="row mt-3">
          <div className="col">
            <label for="name" class="fw-bold form-label">
              Name
            </label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your name"
              required="true"
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
          <div className="col">
            <label for="username" class="fw-bold form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter your username"
              required="true"
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>
        <div className="row">
          <div class="col mb-3">
            <label for="exampleInputEmail1" class="fw-bold form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              required="true"
            />
            <div class="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="fw-bold form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="6+ characters"
            required="true"
          />
          <div class="invalid-feedback">Please choose a username.</div>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            I agree with Dribbble's{" "}
            <a href="https://dribbble.com/terms">Terms of Service</a>,{" "}
            <a href="https://dribbble.com/privacy">Privacy Policy</a>, and
            default
            <a href="https://dribbble.com/notifications">
              Notification Settings
            </a>
            .
          </label>
        </div>
        <Link to="/createProfile">
          <button type="submit" class="fw-bold mb-3 mt-3 w-25 buttonColor btn ">
            Create Account
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SignupForm;
