import styled from "styled-components";
import FoodCard from "../FoodCard";
import HeaderText from "../HeaderText";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 40px;
  margin: 0 auto;
`;

const DateSelectedText = styled(HeaderText)`
  margin-bottom: 20px;
`;

const FoodCardListView = (props) => {
  const { items, handleAddItem } = props;
  const { datePicked } = props;

  return (
    <>
      <DateSelectedText size={14}>{datePicked}</DateSelectedText>

      <Wrapper>
        {items.map((item, idx) => (
          <FoodCard key={idx} food={item} handleAddItem={handleAddItem} />
        ))}
      </Wrapper>
    </>
  );
};

export default FoodCardListView;
