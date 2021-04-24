import styled from "styled-components";
import HeaderText from "./HeaderText";

const Label = styled.label`
  position: relative;
  width: 40%;
  height: 24px;
  border-radius: 4px;
`;

const Radio = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;

  &:hover {
    ~ span {
      background-color: #444;
    }

    ~ span > p,
    ~ span > h3 {
      color: white;
    }
  }

  &:checked {
    ~ span {
      background-color: #444;
    }
    ~ span > p,
    ~ span > h3 {
      color: white;
    }
  }
`;

const Checked = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.3s linear;
`;

const LunchChecked = styled(Checked)`
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const DinnerChecked = styled(Checked)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const MealsTypeToggle = ({ form }) => {
  return (
    <>
      <Label htmlFor="lunch">
        <Radio
          type="radio"
          id="lunch"
          defaultChecked
          name="meals-type"
          form={form}
        />
        <LunchChecked>
          <HeaderText size={14} as="h3">
            Lunch
          </HeaderText>
        </LunchChecked>
      </Label>
      <Label htmlFor="dinner">
        <Radio type="radio" id="dinner" name="meals-type" form={form} />
        <DinnerChecked>
          <HeaderText size={14} as="h3">
            Dinner
          </HeaderText>
        </DinnerChecked>
      </Label>
    </>
  );
};

export default MealsTypeToggle;
