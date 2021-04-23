import styled from "styled-components";
import DateRadio from "./DateRadio";
import MealsTypeToggle from "./MealsTypeToggle";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MealsTypeWrapper = styled(Wrapper)`
  justify-content: center;
  margin-top: 8px;
`;

const Calendar = () => {
  const currentDate = new Date();

  let diff =
    currentDate.getDate() -
    currentDate.getDay() +
    (currentDate.getDay() === 0 ? -6 : 1);

  const startOfWeek = new Date(currentDate.setDate(diff));

  const year = startOfWeek.getFullYear();
  const month = startOfWeek.getMonth();
  const date = startOfWeek.getDate();

  const dateList = [startOfWeek];

  console.log("current date");
  console.log(currentDate.toDateString());

  for (let i = 1; i <= 6; i++) {
    const nextDate = new Date(year, month, date + i, 23, 59, 59);
    dateList.push(nextDate);
    // console.log(`next ${i} day`);
    // console.log(nextDate.toDateString());
    // console.log(nextDate.getDay());
    // console.log(nextDate.getDate());
  }

  return (
    <div>
      <form>
        <Wrapper>
          {dateList.map((date, idx) => (
            <DateRadio key={idx}>{date}</DateRadio>
          ))}
        </Wrapper>
        <MealsTypeWrapper>
          <MealsTypeToggle />
        </MealsTypeWrapper>
      </form>
    </div>
  );
};

export default Calendar;
