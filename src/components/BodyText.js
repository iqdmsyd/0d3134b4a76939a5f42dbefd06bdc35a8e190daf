import styled from "styled-components";

const StyledBodyText = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}px` : "12px")};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "none")};
  color: #6e7679;

  line-height: 1;
  margin: 0;
`;

const BodyText = ({ children, ...rest }) => {
  return <StyledBodyText {...rest}>{children}</StyledBodyText>;
};

export default BodyText;
