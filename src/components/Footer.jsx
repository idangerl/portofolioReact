import React from "react";
import "../stylesheets/Footer.css";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container container grid">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/oscar-daniel-acho-chambi-794574223/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/idangerl"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/oscardaniel.achochambi"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="footer-copyright text-cs">
          &copy; 2023 <span>Oscar Daniel</span>. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
