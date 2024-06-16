import "./ProjectCard.css";
import React from "react";
import ButtonProject from "../button/ButtonProject";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card-container">
      <div className="project">
        <div id="project-text" className="text-container">
          <h4>{project.name}</h4>
          <p>{project.text}</p>
        </div>
        <div className="project-image">
          <img src={project.img} alt={project.name} />
          <div className="button-container">
            <ButtonProject href={project.githubLink}>GitHub</ButtonProject>
            <ButtonProject href={project.demoLink}>Live Demo</ButtonProject>
          </div>
        </div>
      </div>
      <div className="skills">
        {project.skills.map((skill, index) => (
          <span key={index} className="skill-item">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
