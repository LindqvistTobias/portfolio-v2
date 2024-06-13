import React from "react";
import "./AboutMe.css";
import Button from "../button/Button";

const AboutMe = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'assets/tobias-lindqvist-cv.pdf'; // Path to your PDF file
    link.download = 'tobias-lindqvist-cv.pdf'; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="section-container">
      <div className="divider-container">
        <h3>About Me</h3>
      </div>
      <div className="info-container">
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
            developer with 10 years of experience in sales and relationships. I understand
            the importance of reaching out and communicating with both old and
            new customers through the internet, ensuring robust solutions and
            excellent customer relationships.
          </p>
          <div className="button-container">
          <Button onClick={handleDownload}>
            Download CV
          </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
