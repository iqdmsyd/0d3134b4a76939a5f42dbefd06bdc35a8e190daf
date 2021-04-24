import styled from "styled-components";

import HeaderText from "./HeaderText";
import BodyText from "./BodyText";
import Paper from "./Paper";
import Button from "./Button";
import IconButton from "./IconButton";
import Wrapper from "./Wrapper";

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CardInfoWrapper = styled(Wrapper)`
  /* target the last wrapper of direct child */
  > div:last-child {
    margin-top: 16px;
  }
`;

const RatingWrapper = styled(Wrapper)`
  width: fit-content;
  > * + * {
    margin-left: 4px;
  }
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

  const star = Array(Math.floor(rating)).fill("star");
  const star_half = Array(Math.ceil(rating % 1)).fill("star_half");
  const star_border = Array(5 - star.length - star_half.length).fill(
    "star_border"
  );

  return (
    <Paper>
      <CardImage
        src="https://kln.imgix.net/production/9JWAZOV0H0-b317e69029a352367e8d0b16df0bf0d2-cover-2.jpg?w=300"
        alt=""
      />
      <CardInfoWrapper direction="column" align="flex-start" gap={8} p={16}>
        <RatingWrapper justify="flex-start">
          <BodyText size={14}>{rating}</BodyText>
          {star.map((icon, idx) => (
            <IconButton key={idx} icon={icon} color="primary" size={12} />
          ))}
          {star_half.map((icon, idx) => (
            <IconButton key={idx} icon={icon} color="primary" size={12} />
          ))}
          {star_border.length > 0 &&
            star_border.map((icon, idx) => (
              <IconButton key={idx} icon={icon} color="primary" size={12} />
            ))}
        </RatingWrapper>
        <HeaderText size={16}>{name}</HeaderText>
        <BodyText size={12}>by Kulina &bull; Uptown Lunch</BodyText>
        <Wrapper justify="space-between">
          <HeaderText size={16}>Rp {price.toLocaleString()}</HeaderText>
          <ButtonAdd onClick={() => handleAddItem(food)}>
            ADD
            <IconButton icon="add" />
          </ButtonAdd>
        </Wrapper>
      </CardInfoWrapper>
    </Paper>
  );
};

export default FoodCard;
