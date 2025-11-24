//\src\pages\Reset.jsx
import React, { useState } from "react";
import "./reset.css";
import TopNavbar from "../components/TopNavbar";
import { Link } from "react-router-dom";

const Reset = () => {

  return (
    <>
      <TopNavbar minimal={true}/>

    <div className="reset-page">
      <div className="reset-container">

        {/* WHITE BOX */}
        <div className="reset-box">

          {/* TITLE INSIDE WHITE BOX */}
          <h1 className="reset-title">RESET YOUR PASSWORD</h1>

          {/* INFO TEXT */}
          <p className="reset-info">
            Please enter your registered email address.
          </p>

          {/* EMAIL LABEL + REQUIRED */}
          <div className="label-row">
            <label className="reset-label">EMAIL ADDRESS *</label>
            <span className="required-tag">Required *</span>
          </div>

          <input
            type="email"
            placeholder="Enter a valid email"
            className="reset-input"
          />

          {/* SUBMIT BUTTON */}
          <button className="reset-btn">SUBMIT</button>

        <Link to="/Login" className="login-link">
              GO BACK
            </Link>
          </div>
      </div>
    </div>
    </>
  );
};

export default Reset;
