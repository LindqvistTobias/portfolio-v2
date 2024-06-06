import React from "react";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  return (
    <motion.div
      className="navbar-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="navbar-inner-container">
        <h2 style={{ marginLeft: "5%" }}>TL</h2>
        <div className="navbar-links">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#aboutme">About me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-socials">
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/tobias-lindqvist-dev/" className={`sprite sprite-linkedin-white`}></a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
