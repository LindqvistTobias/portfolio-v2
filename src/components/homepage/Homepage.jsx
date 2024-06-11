import { motion } from "framer-motion";
import React from "react";
import Navbar from "../navbar/Navbar";
import Skills from "../Skills/Skills";
import Projects from "../projects/Projects";
import AboutMe from "../aboutMe/AboutMe";
import "./Homepage.css";
import tobiasImage from "../../assets/tobiasLindqvistTransparent.png";
import Contact from "../contact/Contact";
import CodeTextAnimation from "../codeTextAnimation/CodeTextAnimation";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="container">
        <div className="container-inner"> 
          
            <motion.div
              className="container-left"
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 20, delay: 1 }}
            >
              <h1>&lt;Coder /&gt;</h1>
              <p>Full stack developer</p>
            </motion.div>            
            <motion.div
              className="container-right"
              initial={{ x: "200vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 20, delay: 1 }}
            >
              <h1>Experience</h1>
              <p>Over 10 years experience in sales and customer relations</p>
            </motion.div>
          
        
        <div className="hero-container">
            <motion.img
              src={tobiasImage}
              alt="Tobias Lindqvist picture"
              className="hero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5, delay: 2 }}
            />            
        </div>
        
        </div>
        <CodeTextAnimation />
      </section>
      <section id="skills" className={`container dark`}>
        <Skills />
      </section>
      <section id="projects" className={`container`}>
        <Projects />
      </section>
      <section id="about-me" className={`container dark`}>
        <AboutMe />
      </section>
      <section id="contact" className={`container `}>
        <Contact />
      </section>
    </div>
  );
};

export default Homepage;
