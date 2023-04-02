import React, { useEffect, useState } from "react";
import "../stylesheets/Header.css";
import { links } from "../Data";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";
import shapeOne from "../assets/shape-1.png";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState("light-theme");

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const clickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={`${scrollNav ? "scroll-header" : ""} header`}>
      <nav className="nav">
        <Link to="/" onClick={scrollTop} className="nav-logo text-cs">
          Oscar
        </Link>
        <div className={`${showMenu ? "nav-menu show-menu" : "nav-menu"}`}>
          <div className="nav-data">
            <ul className="nav-list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav-item" key={index}>
                    <Link
                      className="nav-link text-cs"
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-150}
                      duration={500}
                      onClick={clickMenu}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="header-socials">
              <a
                href="https://www.linkedin.com/in/oscar-daniel-acho-chambi-794574223/"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/idangerl"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-link"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/oscardaniel.achochambi"
                target="_blank"
                rel="noopener noreferrer"
                className="header-social-link"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="section-deco deco-left header-deco">
            <img src={shapeOne} alt="" className="shape" />
          </div>
        </div>
        <div className="nav-btns">
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === "light-theme" ? <BsMoon /> : <BsSun />}
          </div>
          <div
            className={`${
              showMenu ? "nav-toggle animate-toggle" : "nav-toggle"
            }`}
            onClick={clickMenu}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
