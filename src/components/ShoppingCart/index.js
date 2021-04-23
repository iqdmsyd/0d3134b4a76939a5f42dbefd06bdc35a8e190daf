import React from "react";
import ShoppingCartView from "./ShoppingCartView";

const ShoppingCart = (props) => {
  return React.createElement(ShoppingCartView, { ...props });
};

export default ShoppingCart;
