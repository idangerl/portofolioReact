import React, { useState } from "react";

function Card(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="resume-item">
      <div className="resume-header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume-subtitle">{props.title}</h3>
        <span className="resume-icon">{showInfo ? "-" : "+"}</span>
      </div>

      <div className={`${showInfo ? "show-content" : ""} resume-content`}>
        <div className="resume-data-title">
          <h3 className="resume-title">{props.subtitle}</h3>
          <span className="resume-date text-cs">{props.date}</span>
        </div>
        <p className="resume-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
