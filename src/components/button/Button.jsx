import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: #03338090; /* Dark background color */
  color: #fff;
  cursor: pointer;
  outline: none;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-family: 'Roboto', sans-serif; /* Matching font family */
  width: 100%;

  &:hover {
    background-color: #959cff44; /* Light blue color on hover */
    color: #282c34;
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

const Button = ({ children, ...props }) => {
  return (
    <StyledButton
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      
    </StyledButton>
  );
};

export default Button;
