import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  background-color: #282c34; /* Dark background color */
  color: #fff;
  cursor: pointer;
  outline: none;
  margin: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #61dafb; /* Light blue color on hover */
    color: #282c34;
  }
`;

const ButtonProject = ({ children, href, ...props }) => {
    if (href) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          <StyledButton {...props}>{children}</StyledButton>
        </a>
      );
    }
    return <StyledButton {...props}>{children}</StyledButton>;
  };

export default ButtonProject;
