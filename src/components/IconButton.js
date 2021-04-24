import React from "react";
import styled from "styled-components";

const StyledIconButton = styled.span`
  font-family: "Material Icons";
  font-size: ${(props) => (props.size ? `${props.size}px` : "24px")};
  color: ${(props) => (props.color === "primary" ? "red" : "inherit")};

  padding: 0;
`;

const IconButton = ({ children, icon, ...rest }) => {
  return <StyledIconButton {...rest}>{icon}</StyledIconButton>;
};

export default IconButton;
