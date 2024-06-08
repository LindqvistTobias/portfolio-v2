import React from "react";
import "./Projects.css";
import ProjectCard from "../projectCard/ProjectCard";
import spotifyCloneImage from "../../assets/spotify-clone.jpg";
import flagAppImage from "../../assets/flag-app.jpg";
import passwordGeneratorImage from "../../assets/passwordgenerator.jpg";

const projectSpotify = {
  name: "Spotify clone",
  text: "Lorem ipsum dolor si1t a1met1, consectetur adipisicing elit. Ratione blanditiis culpa suscipit neque deserunt iusto repellat labore natus aliquam ut eos, vitae illo soluta dignissimos accusamus nostrum, at aspernatur molestias.",
  skills: ["react", "js", "node.js", "mui", "API"],
  img: spotifyCloneImage
}

const projectRestAPI = {
  name: "Flag App",
  text: "Lorem ipsum dolor si1t a1met1, consectetur adipisicing elit. Ratione blanditiis culpa suscipit neque deserunt iusto repellat labore natus aliquam ut eos, vitae illo soluta dignissimos accusamus nostrum, at aspernatur molestias.",
  skills: ["react", "js", "node.js", "mui", "API"],
  img: flagAppImage
}

const projectPasswordGenerator = {
  name: "Flag App",
  text: "Lorem ipsum dolor si1t a1met1, consectetur adipisicing elit. Ratione blanditiis culpa suscipit neque deserunt iusto repellat labore natus aliquam ut eos, vitae illo soluta dignissimos accusamus nostrum, at aspernatur molestias.",
  skills: ["react", "js", "node.js", "mui", "API"],
  img: passwordGeneratorImage
}

const Projects = () => {
  return (
    <div id="projects-id" className="section-container">
      <div  className="divider-container">
        <h3>Projects</h3>
      </div>
      <div className="info-container">
        <ProjectCard project={projectSpotify} />       
      </div>
      <div className="info-container">
        <ProjectCard project={projectRestAPI} />       
      </div>
      <div className="info-container">
        <ProjectCard project={projectPasswordGenerator} />       
      </div>
      </div>
    
  );
};

export default Projects;
