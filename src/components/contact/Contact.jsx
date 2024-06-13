import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import styled from "styled-components";
import mailIcon from "../../assets/mail-icon.png"
import phoneIcon from "../../assets/phone-icon.png"

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  border: none;
  background: linear-gradient(45deg, #959cff44, #626eff);
  color: #fff;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(2px);
  }
`;

const IconWrapper = styled.div`
  margin-left: 10px;
`;

const Contact = () => {
  return (
    <div id="contact-id" className="section-container">
      <div className="divider-container">
        <h3>Contact</h3>
      </div>
      <div className="info-container">
        <div className="text-container">
          <h4>Want to know more about me?</h4>
          <p>Thank you for considering my application. I am eager to share more about myself and the unique skills I can bring to your company. I would be delighted to further discuss how my background and expertise align with your team's needs.</p>
        </div>
        <div className="contact-buttons">
          <div className="contact-container">
            <img src={phoneIcon} alt="Phone me" />
            <p>0700000000</p>
          </div>
          <div className="contact-container">
            <img src={mailIcon} alt="Mail me" />
            <p>tobias.lindqvist.tl@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
