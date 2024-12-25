import React, { useState } from "react";
import "../css/Navbar.css";
import teslaLogo from "../images/tesla-logo.png";
import Dropdown from "./Dropdown";
import { data } from "../dropDownItems";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={teslaLogo} alt="tesla-logo" />
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {data.map((list) => (
            <Dropdown data={list} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
