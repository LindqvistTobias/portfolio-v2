import "./ProjectCard.css";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      <div className="text-container">
        <h4>{project.name}</h4>
        <p>{project.text}</p>
      </div>
      <div className="project-image">
        <img src={project.img} alt={project.name} />
      </div>
    </div>
  );
};

export default ProjectCard;
