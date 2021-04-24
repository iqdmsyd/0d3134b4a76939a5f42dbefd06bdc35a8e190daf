import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : "nowrap")};
  align-items: ${(props) => (props.align ? props.align : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};

  @supports (gap: 4px) {
    gap: ${(props) => (props.gap ? `${props.gap}px` : "0")};
  }

  @supports not (gap: 4px) {
    > * + * {
      margin: ${(props) => (props.gap ? `${props.gap}px` : "0")};
    }
  }

  padding: ${(props) => (props.p ? `${props.p}px` : "0")};
`;

const Wrapper = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

export default Wrapper;
