//Login.jsx
import React, { useState, useEffect } from "react";
import "./Login.css";
import TopNavbar from "../components/TopNavbar";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // DON'T REDIRECT AUTOMATICALLY
      // Let the user choose from the dropdown instead
    }
  }, []);

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("registeredEmail");
    const storedPassword = localStorage.getItem("registeredPassword");

    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (email !== storedEmail) {
      setErrorMsg("Invalid email.");
      return;
    }

    if (password !== storedPassword) {
      setErrorMsg("Incorrect password.");
      return;
    }

    // ✅ Mark user as logged in
    localStorage.setItem("isLoggedIn", "true");

    // ✅ Redirect to home page after successful login
    navigate("/");
  };

  return (
    <>
      <TopNavbar minimal={true}/>

      <div className="login-page">
        <div className="login-container">

          {/* LEFT SIDE */}
          <div className="login-left">
            <h1 className="title">LOGIN</h1>
            <p className="subtitle">Log in with your email address and password.</p>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <div className="label-row">
              <label className="label">EMAIL ADDRESS *</label>
              <span className="required-tag">Required *</span>
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="label-row">
              <label className="label">PASSWORD *</label>
              <span className="required-tag">Required *</span>
            </div>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="field-description">
              Password must be 8–20 letters and contain both letters and numbers.
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

            <button className="login-btn" onClick={handleLogin}>
              LOG IN
            </button>

            <Link to="/reset" className="reset">
              FORGOT YOUR PASSWORD?
            </Link>
          </div>

          <div className="divider"></div>

          {/* RIGHT SIDE */}
          <div className="login-right">
            <h1 className="title">CREATE AN ACCOUNT</h1>
            <p className="subtitle">
              If you create an account, it takes less time to check out and complete your orders.
            </p>

            <Link to="/register" className="create-link">
              <button className="create-btn">CREATE AN ACCOUNT</button>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
