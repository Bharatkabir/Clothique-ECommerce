import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setsocialToggle] = useState(false);
  const [headerFixed, setheaderFixed] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setheaderFixed(true);
    } else {
      setheaderFixed(false);
    }
  });
  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link className="lab-btn me-3" to="/signup">
              <span>Create Account</span>
            </Link>
            <Link to="/login">
              <span>Log in</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-button">
        <div className="container">
          <div className="header-wrapper">
            <div className="logo-search-acte">
              <Link to={"/"}>
                <img src={logo} id="img" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
