export default function createTwoWeeksDate() {
  // start from monday
  const currentDate = new Date();
  let diff =
    currentDate.getDate() -
    currentDate.getDay() +
    (currentDate.getDay() === 0 ? -6 : 1);

  const startOfWeek = new Date(currentDate.setDate(diff));
  // const startOfWeek = new Date();

  const year = startOfWeek.getFullYear();
  const month = startOfWeek.getMonth();
  const date = startOfWeek.getDate();

  const dateList = [startOfWeek];

  for (let i = 1; i <= 13; i++) {
    const nextDate = new Date(year, month, date + i, 23, 59, 59);
    dateList.push(nextDate);
    // console.log(`next ${i} day`);
    // console.log(nextDate.toDateString());
    // console.log(nextDate.getDay());
    // console.log(nextDate.getDate());
  }

  return dateList;
}
