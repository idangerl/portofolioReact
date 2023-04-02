import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio-items card card-two"
            key={id}
          >
            <div className="portfolio-img-wrapper">
              <img src={img} alt={title} className="portfolio-img" />
            </div>
            <span className="portfolio-category text-cs">{category}</span>
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
            <p className="home-socials">
              <a href="" className="home-social-link">
                <FaGithub />
              </a>
              <a href="" className="home-social-link">
                <SiNetlify />
              </a>
            </p>
            <img src={shapeTwo} alt="" className="shape c-shape" />
          </motion.div>
        );
      })}
    </>
  );
}

export default Items;
