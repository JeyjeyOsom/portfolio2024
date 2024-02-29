import React from "react";
import "./style.css";
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareGithub,
  FaSquareInstagram,
  FaLinkedin,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <div>
      <div className="navbar-footer">
        <div className="top-footer">Who.1?</div>
        <div className="bottom-footer">
          <a
            href="https://twitter.com/JeyjeyOsom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://github.com/JeyjeyOsom"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/juan-roberto-dejon-178951249/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
