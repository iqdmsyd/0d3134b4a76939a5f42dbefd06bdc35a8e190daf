import React from "react";
import styled from "styled-components";

import Button from "./Button";
import IconButton from "./IconButton";
import HeaderText from "./HeaderText";
import StyledBodyText from "./BodyText";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  padding: 8px;
  background-color: white;
  z-index: 999;

  > * + * {
    margin-left: 8px;
  }
`;

const BodyText = styled(StyledBodyText)`
  margin-bottom: ${(props) => `-${props.size - 2}px`};
`;

const AppBar = ({ location }) => {
  return (
    <Wrapper>
      <Button noGutter>
        <IconButton icon="arrow_back" />
      </Button>
      <div>
        <BodyText size={8} uppercase>
          alamat pengantaran
        </BodyText>
        <Button noGutter>
          <HeaderText as="h3" size={12}>
            {location}
          </HeaderText>
          <IconButton icon="expand_more" color="primary" />
        </Button>
      </div>
    </Wrapper>
  );
};

export default AppBar;
