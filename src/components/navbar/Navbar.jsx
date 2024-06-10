import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logga.png";
import Github from "../../assets/github-icon.png";
import Linkedin from "../../assets/linkedin-icon.png";

const Navbar = () => {
  return (
    <motion.div
      className="navbar-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="navbar-inner-container">
        <img id="logo" src={Logo} />
        <div className="navbar-links">
          <ul>
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about-me"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                About me
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-50}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
        <div className="navbar-socials">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/tobias-lindqvist-dev/"
                >
                  <img src={Linkedin} alt="Linkedin ref" style={{height: '30px'}} />
                </a>
              
            </li>
            <li>
            <a href="https://github.com/LindqvistTobias">
                <img
                  src={Github}
                  alt="Github ref"                  
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
