import "../about/AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import FullStack from "../../assets/FullStack.jpg";
import Desktop from "../../assets/Desktop.jpg";

const AboutContent = () => {
  return (
    <div className="about-content-container">
      <div className="about-me">
        <div className="about-left">
          <h1>Let me share more about me.</h1>
          <p>
            Possessing a Computer Science background, I am a proficient
            Full-stack Software Developer skilled in the MERN stack, adept at
            creating robust web applications. My expertise encompasses both
            front-end and back-end development, allowing me to craft
            comprehensive solutions. With a strong desire to make meaningful
            contributions, I am enthusiastic about lending my technical prowess
            to impactful projects that drive innovation and excellence. My
            holistic skill set and commitment to delivering high-quality results
            position me to thrive in dynamic and challenging environments.
          </p>
          <Link to="/contact">
            <button className="btn">CONTACT</button>
          </Link>
        </div>
        <div className="about-right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={FullStack} className="img" alt="Full stack" />
            </div>
            <div className="img-stack bottom">
              <img src={Desktop} className="img" alt="Full stack" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
