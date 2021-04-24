import styled from "styled-components";
import DateRadio from "../DateRadio";
import MealsTypeToggle from "../MealsTypeToggle";

const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 0;
  width: 100vw;
  /* height: 40px; */
  z-index: 2;
  background-color: white;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MealsTypeWrapper = styled(Wrapper)`
  justify-content: center;

  position: fixed;
  top: 98px;
  left: 0;
  margin: 0 auto;
  padding: 8px 0;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(-120%)")};
  transform-origin: top;
  transition: transform 0.2s linear;
  z-index: 1;
  background-color: white;
`;

const FilterMenuBarView = ({ dateList, open, changeDate }) => {
  return (
    <>
      <Container>
        <form id="pick-date">
          <Wrapper>
            {dateList.map((date, idx) => (
              <DateRadio key={idx} handleChange={changeDate}>
                {date}
              </DateRadio>
            ))}
          </Wrapper>
        </form>
      </Container>
      <MealsTypeWrapper open={open}>
        <MealsTypeToggle form="pick-date" />
      </MealsTypeWrapper>
    </>
  );
};

export default FilterMenuBarView;
