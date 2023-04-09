import React from "react";
import { skills } from "../Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import shapeTwo from "../assets/shape-2.png";
import "../stylesheets/Skills.css";
import shapeOne from "../assets/shape-1.png";

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title text-cs">Habilidades Profesionales</h2>
      <p className="section-subtitle">
        Mis <span>Talentos</span>
      </p>

      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="skills-container container mySwiper"
      >
        {skills.map(({ name, percentage, description, id }, index) => {
          return (
            <SwiperSlide className="skills-item card card-one" key={id}>
              <h3 className="skills-title">{name}</h3>

              <p className="skills-description">{description}</p>
              <img src={shapeTwo} alt="shape 2" className="shape c-shape" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="section-deco deco-right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section-bg-wrapper">
        <span className="bg-title">Skills</span>
      </div>
    </section>
  );
}

export default Skills;
