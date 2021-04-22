import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${(props) => (props.noGutter ? 0 : "4px 8px")};
  border: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.6;
  }
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
