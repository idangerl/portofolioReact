import React, { useState } from "react";
import "../../stylesheets/Portfolio.css";
import Items from "./Items";
import { projects } from "../../Data";
import { AnimatePresence } from "framer-motion";
import shapeOne from '../../assets/shape-1.png'

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];
console.log(allNavList);

function Portfolio() {
  const [projectItems, setProjectItems] = useState(projects);

  const [navList, setNavList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "all") {
      setProjectItems(projects);
      return;
    }

    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setProjectItems(newProjectItems);
  };

  return (
    <section className=" portfolio section" id="work">
      <h2 className="section-title text-cs">Portafolio</h2>
      <p className="section-subtitle">
        Mis<span>Proyectos</span>
      </p>
      <div className="portfolio-container container grid">
        <AnimatePresence initial={false}>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </div>
      <div className="section-deco deco-left">
        <img src={shapeOne} alt="shape" className="shape" />
      </div>
      <div className="section-bg-wrapper">
        <span className="bg-title">Portfolio</span>
      </div>
    </section>
  );
}

export default Portfolio;
