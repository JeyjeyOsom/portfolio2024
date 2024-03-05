import React from "react";
import "./style.css";
const About = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00a9ff"
          fill-opacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,240C480,213,600,139,720,144C840,149,960,235,1080,250.7C1200,267,1320,213,1380,186.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <div className="about-container">
        <div className="about-content">
          <h1>About</h1>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00a9ff"
          fill-opacity="1"
          d="M0,224L60,234.7C120,245,240,267,360,240C480,213,600,139,720,144C840,149,960,235,1080,250.7C1200,267,1320,213,1380,186.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default About;
