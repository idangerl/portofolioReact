import React from "react";
import "../../stylesheets/Resume.css";
import { cv } from "../../Data";
import Card from "./Card";
import shapeOne from '../../assets/shape-1.png'

function Resume() {
  return (
    <section className="resume section" id="resume">
      <h2 className="section-title text-cs">Educacion</h2>
      <p className="section-subtitle">
        Mi <span>Historial</span>
      </p>
      <div className="resume-container container grid">
        <div className="resume-group">
          <h3 className="resume-heading">Educacion</h3>
          <div className="resume-items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="resume-group">
          <h3 className="resume-heading">Certificaciones</h3>
          <div className="resume-items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="section-deco deco-right">
        <img src={shapeOne} alt="" className="shape" />
      </div>
      <div className="section-bg-wrapper">
        <span className="bg-title">Education</span>
      </div>
    </section>
  );
}

export default Resume;
