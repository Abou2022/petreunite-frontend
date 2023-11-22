import "../about/AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import MyResume from "../../assets/BAKARY-SYLLA.pdf";

import FullStack from "../../assets/FullStack.jpg";
import Desktop from "../../assets/Desktop.jpg";
import Bak1 from "../../assets/Bak1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Let me share more about me.</h1>
        <p>
          I am <em>Bakary Sylla</em> , a seasoned software professional residing
          in Washington State. I honed my skills at the University of
          Washington, where I successfully completed a bootcamp in Full Stack
          Web Development.
          <br /> With a foundation in Computer Science, I bring a wealth of
          experience as a proficient Full-stack Software Developer, specializing
          in the MERN stack. My proficiency extends across both front-end and
          back-end development, enabling me to create robust web applications
          and devise comprehensive solutions. <br /> Driven by a passion for
          impactful contributions, I am eager to leverage my technical prowess
          on projects that push the boundaries of innovation and excellence. My
          holistic skill set, coupled with a steadfast commitment to delivering
          high-quality results, positions me to thrive in dynamic and
          challenging professional environments.
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
        <a href={MyResume} download="Bakary_Sylla_Resume">
          <button className="btn1">Download My Resume</button>
        </a>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={Bak1} className="img" alt="Full stack" />
          </div>

          <div className="img-stack bottom">
            <img src={Desktop} className="img" alt="Full stack" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
