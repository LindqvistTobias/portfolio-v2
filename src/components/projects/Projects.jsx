import React from "react";
import "./Projects.css";
import ProjectCard from "../projectCard/ProjectCard";
import spotifyCloneImage from "../../assets/spotify-clone.jpg";
import flagAppImage from "../../assets/flag-app.jpg";
import passwordGeneratorImage from "../../assets/passwordgenerator.jpg";

const projectSpotify = {
  name: "Spotify clone",
  text: "I created a Spotify clone focusing on providing a user-friendly experience for both mobile and desktop. Using React and Material UI, I integrated the Spotify API to allow users to play music and explore their personal playlists directly from the browser. The result is a smooth and responsive platform for music enthusiasts to enjoy their favorite tunes wherever they are.",
  skills: ["react", "js", "node.js", "mui", "API"],
  img: spotifyCloneImage
}

const projectRestAPI = {
  name: "Flag App",
  text: "I developed a flag app using a REST Countries API and implemented it with React, Material UI, and CSS. Users can browse flags from around the world and get detailed information about different countries' currencies, populations, and capitals. By combining sleek design with useful functionality, the app offers an engaging and educational experience for users exploring the world's diversity.",
  skills: ["react", "js", "node.js", "mui", "API"],
  img: flagAppImage
}

const projectPasswordGenerator = {
  name: "Flag App",
  text: "I developed a password generator that allows users to create customized passwords according to their preferences. With the ability to choose between including numbers, lowercase or uppercase letters, and special characters, as well as specifying the length of the password, users can create unique and secure passwords. Additionally, the tool provides a strength assessment that gives users insight into how robust their password is, helping to ensure a high level of security for their accounts and data.",
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
