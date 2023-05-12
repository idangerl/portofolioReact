import React from "react";
import profileImg from "../assets/profile-img2.png";
import shapeOne from "../assets/shape-1.png";
import shapeTwo from "../assets/shape-2.png";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import "../stylesheets/Home.css";
import CV from "../assets/CvOscarDanielAcho.pdf";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-wrapper">
        <div className="home-container container">
          <p className="home-subtitle text-cs">
            Hola, <span>mi nombre es</span>
          </p>
          <h1 className="home-title text-cs">
            <span>Oscar</span> Dan.
          </h1>
          <p className="home-job">
            <span className="text-cs">Soy</span> <b>Desarrollador Web</b>
          </p>
          <div className="home-img-wrapper">
            <div className="home-banner">
              <img
                src={profileImg}
                className="home-profile"
                alt="image profile"
              />
            </div>

            <img src={shapeOne} alt="shape one" className="shape shape-1" />
            <img src={shapeTwo} alt="shape two" className="shape shape-2" />
            <img src={shapeTwo} alt="shape three" className="shape shape-3" />
          </div>
          <p className="home-text">
            Hola!, soy Oscar Daniel Acho y estoy emocionado de compartir con
            ustedes mi portafolio, donde encontrarás una muestra de mis
            proyectos más recientes y detalles sobre mis habilidades. Me encanta
            trabajar en equipo y estoy dispuesto a colaborar contigo en futuros
            proyectos.
          </p>
          <div className="home-socials">
            <a
              href="https://www.linkedin.com/in/oscar-daniel-acho"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/idangerl"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/oscardaniel.achochambi"
              target="_blank"
              rel="noopener noreferrer"
              className="home-social-link"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="home-btns">
            <a download="" href={CV} className="btn text-cs">
              Descargar CV
            </a>
            <a href="#skills" className="hero-link text-cs">
              Mis Habilidades
            </a>
          </div>
        </div>
        <div className="section-deco deco-left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>
      <div className="section-bg-wrapper">
        <span className="bg-title">Web Developer</span>
      </div>
    </section>
  );
}

export default Home;
