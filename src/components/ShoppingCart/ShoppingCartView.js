import styled from "styled-components";

import Paper from "../Paper";
import Button from "../Button";
import IconButton from "../IconButton";
import HeaderText from "../HeaderText";
import BodyText from "../BodyText";
import Wrapper from "../Wrapper";

const CartPaper = styled(Paper)`
  position: fixed;
  bottom: 8px;
  left: 0;
  width: 80%;
  margin: 0 10%;
  background-color: #a23530;
`;

const CartInfoWrapper = styled(Wrapper)`
  > * {
    color: #f1f1f2;
  }
`;

const CartButton = styled(Button)`
  color: white;

  &::after {
    font-family: "Material Icons";
    font-size: 24px;
    content: "navigate_next";
  }
`;

const CartLayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), #fff);

  transform: ${(props) =>
    props.quantity > 0 ? "translateY(0)" : "translateY(120%)"};
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
`;

const ShoppingCartView = (props) => {
  const { quantity, subtotal } = props;

  return (
    <CartLayer quantity={quantity}>
      <CartPaper>
        <Wrapper justify="space-between" p={8}>
          <CartInfoWrapper direction="column" wrap="nowrap" align="flex-start">
            <HeaderText size={14}>
              {quantity} Items | Rp {subtotal.toLocaleString()}
            </HeaderText>
            <BodyText size={12}>Termasuk ongkor kirim</BodyText>
          </CartInfoWrapper>
          <CartButton noGutter>
            <IconButton icon="shopping_cart" />
          </CartButton>
        </Wrapper>
      </CartPaper>
    </CartLayer>
  );
};

export default ShoppingCartView;
