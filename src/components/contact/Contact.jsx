import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import ContactForm from "../contactForm/ContactForm";

const Contact = () => {
  return (
    <div id="contact-id" className="section-container">
      <div className="divider-container">
        <h3>Contact</h3>
      </div>
      <div className="contact-container-wrap">
        <div className="info-container">
          <div className="text-container">
            <h4>Want to know more about me?</h4>
            <p>
              Thank you for considering my application. I am eager to share more
              about myself and the unique skills I can bring to your company. I
              would be delighted to further discuss how my background and
              expertise align with your team's needs.
            </p>
          </div>
          <div className="contact-buttons">
            <div className="contact-container">
              <img src={phoneIcon} alt="Phone me" />
              <p>+46 76 780 93 26</p>
            </div>
            <div className="contact-container">
              <img src={mailIcon} alt="Mail me" />
              <p>tobias.lindqvist.tl@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form-container">
          <h5>
            I would love to tell more about me. Write your information below and
            I will be in touch. Looking forward to hear from you.
          </h5>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
