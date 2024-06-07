import { motion } from "framer-motion";
import React from "react";
import Navbar from "../navbar/Navbar";
import Skills from "../Skills/Skills";
import "./Homepage.css";
import tobiasImage from "../../assets/tobiasLindqvistTransparent.png";

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
          
        </div>
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
      </section>
      <section id="skills" className={`container dark`}>
        <Skills />
      </section>
      <section id="projects" className={`container`}>
        <h2>Projects</h2>
      </section>
      <section id="about-me" className={`container dark`}>
        <h2>About me</h2>
      </section>
      <section id="contact" className={`container `}>
        <h2>Contact</h2>
      </section>
    </div>
  );
};

export default Homepage;
