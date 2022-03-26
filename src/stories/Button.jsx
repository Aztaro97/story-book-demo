import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./button.css";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, backgroundColor, ...props }) => {
  return (
    <ButtonStyle
      type="button"
      backgroundColor={backgroundColor}
      {...props}
    >
      {label}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 10px 1rem;
  border-radius: 5px;
  border: none;
`;

ButtonStyle.propTypes = {
  label: PropTypes.string,
};


Button.defaultProps = {
  label: "Primary",
  backgroundColor: "#ececec",
}
