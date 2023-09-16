import "../footer/Footer.css";

import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Kent, Washington</p>
              <p>United States</p>
            </div>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              <a href="mailto:syllabakary2002@gmail.com">
                syllabakary2002@gmail.com
              </a>
            </h4>
          </div>
          <div className="social">
            <a href="https://github.com/Abou2022" target="_blanc">
              {" "}
              <FaGithub
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a href="http://www.linkedin.com/in/bakary-sylla" target="_blanc">
              <FaLinkedin
                size={40}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>

        <div className="right">
          <h4>About Pet Reunite</h4>
          <p>
            Passionate animal lover and tech enthusiast dedicated to creating a
            user-friendly platform for reuniting lost pets with their owners,
            leveraging my skills in web development and a deep empathy for the
            bond between humans and their furry companions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
