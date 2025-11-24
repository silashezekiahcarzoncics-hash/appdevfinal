//\src\pages\Register.jsx
import React, { useState } from "react";
import "./register.css";
import TopNavbar from "../components/TopNavbar";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    // Basic email check
    if (!email.includes("@")) {
      setErrorMsg("Please enter a valid email.");
      return;
    }

    if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters.");
      return;
    }

    // Save credentials
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);

    // Redirect to Login
    navigate("/login");
  };

  return (
    <>
      <TopNavbar minimal={true} />

      <div className="register-page">
        <div className="register-container">
          <div className="register-box">
            <h1 className="register-title">CREATE AN ACCOUNT</h1>

            <p className="register-info">
              You will receive a confirmation email after creating your account.
            </p>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <div className="label-row">
              <label className="register-label">EMAIL ADDRESS *</label>
              <span className="required-tag">Required *</span>
            </div>

            <input
              type="email"
              placeholder="Enter a valid email"
              className="register-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="label-row">
              <label className="register-label">PASSWORD *</label>
              <span className="required-tag">Required *</span>
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="register-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="field-description">
              Password must be 8–20 characters long.
            </p>

            <div className="checkbox-row">
              <input
                type="checkbox"
                id="showpass"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="showpass">Show my password</label>
            </div>

            <button className="register-btn" onClick={handleRegister}>
              REGISTER
            </button>

            <Link to="/login" className="login-link">
              ALREADY HAVE AN ACCOUNT?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
