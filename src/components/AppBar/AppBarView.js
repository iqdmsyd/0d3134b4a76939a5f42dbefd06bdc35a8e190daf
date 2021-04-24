import styled from "styled-components";
import Button from "../Button";
import IconButton from "../IconButton";
import HeaderText from "../HeaderText";
import BodyText from "../BodyText";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;

  padding: 8px;
  background-color: white;
  z-index: 999;

  > * + * {
    margin-left: 8px;
  }
`;

const CustomBodyText = styled(BodyText)`
  margin-bottom: ${(props) => `-${props.size - 4}px`};
`;

const AppBarView = (props) => {
  const { location, handleOpenModal } = props;

  return (
    <Wrapper>
      <Button noGutter>
        <IconButton icon="arrow_back" />
      </Button>
      <div>
        <CustomBodyText size={8} uppercase>
          alamat pengantaran
        </CustomBodyText>
        <Button noGutter onClick={handleOpenModal}>
          <HeaderText as="h3" size={16}>
            {location}
          </HeaderText>
          <IconButton icon="expand_more" color="primary" />
        </Button>
      </div>
    </Wrapper>
  );
};

export default AppBarView;
