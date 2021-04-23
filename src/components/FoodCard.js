import styled from "styled-components";

import CardImage from "./CardImage";
import CardInfo from "./CardInfo";
import HeaderText from "./HeaderText";
import BodyText from "./BodyText";
import Paper from "./Paper";
import Button from "./Button";
import IconButton from "./IconButton";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
`;

const ButtonAdd = styled(Button)`
  padding: 8px 16px;
  background-color: #f9234a;
  font-size: 12px;
  color: white;
  border-radius: 4px;

  > span {
    font-size: inherit;
  }
`;

const FoodCard = ({ food, handleAddItem }) => {
  const { name, rating, price } = food;

  return (
    <Paper>
      <CardImage
        src="https://kln.imgix.net/production/9JWAZOV0H0-b317e69029a352367e8d0b16df0bf0d2-cover-2.jpg?w=300"
        alt=""
      />
      <CardInfo>
        <BodyText size={14}>{rating}</BodyText>
        <HeaderText size={16}>{name}</HeaderText>
        <BodyText size={12}>by Kulina &bull; Uptown Lunch</BodyText>
        <Wrapper>
          <HeaderText size={16}>Rp {price}</HeaderText>
          <ButtonAdd onClick={() => handleAddItem(food)}>
            ADD
            <IconButton icon="add" />
          </ButtonAdd>
        </Wrapper>
      </CardInfo>
    </Paper>
  );
};

export default FoodCard;
