import { motion } from "framer-motion";
import React from "react";
import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import tobiasImage from '../../assets/tobiasLindqvistTransparent.png';

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section id="home" className="container">
        <div className="container-left">
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, delay: 1 }}
          >
            <h1>Coder</h1>
            <p>Mern developer</p>
          </motion.div>
          <div className="container-right">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 120, delay: 1 }}
            >
              <h1>Experience</h1>
              <p>10 years in sales and customer relations</p>
            </motion.div>
          </div>
        </div>
        <motion.img
          src={tobiasImage}
          alt="Tobias Lindqvist picture"
          className="hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5, delay: 2 }}
        />
      </section>
      <section id="skills" className={`container dark`}>
        <h2>Skills</h2>
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
