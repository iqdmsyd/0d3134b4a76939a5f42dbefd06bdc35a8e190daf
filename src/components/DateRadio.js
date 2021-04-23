import styled from "styled-components";
import BodyText from "./BodyText";
import HeaderText from "./HeaderText";

const Label = styled.label`
  position: relative;
  width: clamp(2.5rem, calc(5vw + 1rem), 3.125rem);
  height: clamp(2.5rem, calc(5vw + 1rem), 3.125rem);
  border-radius: 50%;
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
  border-radius: 50%;
  z-index: -1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.2s linear;
`;

const days = ["MIN", "SEN", "SEL", "RAB", "KAM", "JUM", "SAB"];

const isToday = (date) => {
  const today = new Date().getDate();
  if (today === date) return true;
  return false;
};

const DateRadio = ({ children }) => {
  const dateObj = children;
  const id = dateObj.toDateString();
  const day = dateObj.getDay();
  const date = dateObj.getDate();

  return (
    <Label htmlFor={id}>
      <Radio type="radio" id={id} defaultChecked={isToday(date)} name="date" />
      <Checked>
        <BodyText size={8}>{days[day]}</BodyText>
        <HeaderText size={14} as="h3">
          {date}
        </HeaderText>
      </Checked>
    </Label>
  );
};

export default DateRadio;
