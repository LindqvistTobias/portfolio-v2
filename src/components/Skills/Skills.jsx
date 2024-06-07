import "./Skills.css";
import cssLogo from "../../assets/css.svg"
import express from "../../assets/express.svg"
import git from "../../assets/git.svg"
import html from "../../assets/html.svg"
import javascript from "../../assets/javascript.svg"
import react from "../../assets/react_icon.svg"
import nodejs from "../../assets/nodejs.svg"


const Skills = () => {
  return (
    <div className="section-container">
        <div className="divider-container">
            <h3>Skills</h3></div>
            <div className="info-container">
                <div className="text-container">
                    <h4>Technologies</h4>
                    <p>Lorem ipsum dolor si1t a1met1, consectetur adipisicing elit. Ratione blanditiis culpa suscipit neque deserunt iusto repellat labore natus aliquam ut eos, vitae illo soluta dignissimos accusamus nostrum, at aspernatur molestias.</p>
                </div>
                <div className="skills-container">
                <div className="img-container">
                    <img src={cssLogo} alt="css logo" />
                    <img src={express} alt="css logo" />
                    <img src={git} alt="css logo" />
                    <img src={html} alt="css logo" />
                    <img src={javascript} alt="css logo" />
                    <img src={react} alt="css logo" /> 
                    <img src={nodejs} alt="css logo" />        
                </div>
            </div>
        </div>
    </div>
  )
};

export default Skills;
