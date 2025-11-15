import React, { useState, useEffect } from "react";
import logo from "../assets/blank_image.jpg";
import "./TopNavbar.css";

function TopNavbar({
  onViewCart,
  selectedMainTab,
  setSelectedMainTab,
  cart,
  minimal = false,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="top-navbar">
      {!minimal && (
        <div className="top-navbar-links">
          <a
            href="#"
            onClick={() => setSelectedMainTab("home")}
            className={`top-navbar-link ${selectedMainTab === "home" ? "active" : ""}`}
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setSelectedMainTab("about")}
            className={`top-navbar-link ${selectedMainTab === "about" ? "active" : ""}`}
          >
            About Us
          </a>
          <a
            href="#"
            onClick={() => setSelectedMainTab("contact")}
            className={`top-navbar-link ${selectedMainTab === "contact" ? "active" : ""}`}
          >
            Contact
          </a>
        </div>
      )}

      <div className="top-navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="logo-text">Saipher CG</span>
      </div>

      {!minimal && (
        <div className="top-navbar-cart">
          <button onClick={onViewCart} className="cart-button">
            View Cart
            {cart?.length > 0 && <span className="cart-indicator" />}
          </button>
        </div>
      )}
    </nav>
  );
}

export default TopNavbar;
