//TopNavbar.jsx
import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import "./TopNavbar.css";

function TopNavbar({
  onViewCart,
  selectedMainTab,
  setSelectedMainTab,
  cart,
  minimal = false,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status on mount
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    // Close dropdown if clicking outside
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Optional: listen to localStorage changes in case user logs in/out in another tab
  useEffect(() => {
    const handleStorageChange = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    setShowDropdown(false);
    window.location.href = "/login";
  };

  return (
    <nav className="top-navbar">
      {!minimal && (
        <div className="top-navbar-links">
          <a
            href="#"
            onClick={() => setSelectedMainTab("home")}
            className={`top-navbar-link ${
              selectedMainTab === "home" ? "active" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setSelectedMainTab("about")}
            className={`top-navbar-link ${
              selectedMainTab === "about" ? "active" : ""
            }`}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={() => setSelectedMainTab("contact")}
            className={`top-navbar-link ${
              selectedMainTab === "contact" ? "active" : ""
            }`}
          >
            Contact
          </a>
        </div>
      )}

      <div className="top-navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">PackEdge Supplies</span>
      </div>

      {!minimal && (
        <div className="top-navbar-cart" ref={dropdownRef}>
          <button onClick={onViewCart} className="cart-button">
            View Cart
            {cart?.length > 0 && <span className="cart-indicator" />}
          </button>

          {/* ACCOUNT DROPDOWN */}
          <div className="account-dropdown-container">
            <button
              className="cart-button"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              Account
            </button>

            {showDropdown && (
              <div className="account-dropdown">
                {!isLoggedIn ? (
                  <button className="dropdown-item" onClick={handleLogin}>
                    Login
                  </button>
                ) : (
                  <button className="dropdown-item logout" onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default TopNavbar;
