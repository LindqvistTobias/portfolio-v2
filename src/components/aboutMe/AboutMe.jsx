import React from "react";
import "./AboutMe.css";
import Button from "../button/Button";

const AboutMe = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch("assets/tobias-lindqvist-cv.pdf");
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "tobias-lindqvist-cv.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        console.error("File not found.");
      }
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="section-container">
      <div className="divider-container">
        <h3>About Me</h3>
      </div>
      <div id="about-me" className="info-container">
        <div className="list-container">
          <ul>
            <li>Relationship builder</li>
            <li>Sales specialist</li>
            <li>Problemsolver</li>
            <li>Fullstack</li>
            <li>Teamplayer</li>
          </ul>
        </div>
        <div className="cv-container">
          <h4>CV</h4>
          <p>
            My name is Tobias Lindqvist, a problem solver and full-stack
            developer with 10 years of experience in sales and relationships. I
            understand the importance of reaching out and communicating with
            both old and new customers through the internet, ensuring robust
            solutions and excellent customer relationships.
          </p>
          <div className="button-container">
            <Button onClick={handleDownload}>Download CV</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
