import React from "react";
import "./AboutMe.css";
import Button from "../button/Button";

const AboutMe = () => {
  return (
    <div className="section-container">
      <div className="divider-container">
        <h3>About Me</h3>
      </div>
      <div className="info-container">
        <div className="list-container">
          <ul>
            <li>Relationshipbuilder</li>
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
          <Button>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
