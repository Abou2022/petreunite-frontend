import "../footer/Footer.css";
import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} PetReunite. All rights reserved.
          </p>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li>
              <a
                href="mailto:contact@petreunite.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/petreunite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/petreunite"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="tel:+1234567890">
                <i className="fas fa-phone"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
