import React from "react";
import "./Projects.css";
import ProjectCard from "../projectCard/ProjectCard";
import spotifyCloneImage from "../../assets/spotify-clone.jpg";

const projectSpotify = {
  name: "Spotify clone",
  text: "Lorem ipsum dolor si1t a1met1, consectetur adipisicing elit. Ratione blanditiis culpa suscipit neque deserunt iusto repellat labore natus aliquam ut eos, vitae illo soluta dignissimos accusamus nostrum, at aspernatur molestias.",
  skills: ["react", "js", "node.js", "mui", "API"],
  img: spotifyCloneImage
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
      </div>
    
  );
};

export default Projects;
