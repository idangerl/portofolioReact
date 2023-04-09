import React from "react";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

function Items({ projectItems }) {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, title, description, GIT_URL, PAGE_URL } = projectItem;
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
              <a href={PAGE_URL} target="_blank" rel="noopener noreferrer">
                <img src={img} alt={title} className="portfolio-img" />
              </a>
            </div>
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
            <p className="home-socials">
              <a
                href={GIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-link"
              >
                <FaGithub />
              </a>
              <a
                href={PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="home-social-link"
              >
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
