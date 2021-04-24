import styled from "styled-components";

const StyledHeaderText = styled.h1`
  font-size: ${(props) => `${props.size}px`};
  font-weight: 700;
  line-height: 1;
  color: ${(props) => (props.color ? props.color : "#424749")};
`;

const HeaderText = ({ children, ...rest }) => {
  return <StyledHeaderText {...rest}>{children}</StyledHeaderText>;
};

export default HeaderText;
