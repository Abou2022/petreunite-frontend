// import "../navbar/Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const UserInfoPageNavbar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleClick = () => setClick(!click);

  const changeColorOnScroll = () => {
    if (window.scrollY >= 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColorOnScroll);
    return () => {
      window.removeEventListener("scroll", changeColorOnScroll);
    };
  }, []);

  return (
    <nav className={scrolling ? "navbar scrolling" : "navbar"}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          PetReunite
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/add-pet" className="nav-links">
              Add Pet Lost/Found
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              About Developer
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout" className="nav-links">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default UserInfoPageNavbar;
