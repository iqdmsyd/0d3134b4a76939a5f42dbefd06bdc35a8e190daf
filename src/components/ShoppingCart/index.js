import React from "react";
import ShoppingCartView from "./ShoppingCartView";

const ShoppingCart = (props) => {
  const quantity = props.items.length;
  const subtotal = props.items.reduce(
    (prev, current) => prev + current.price,
    0
  );

  return React.createElement(ShoppingCartView, {
    ...props,
    quantity,
    subtotal,
  });
};

export default ShoppingCart;
