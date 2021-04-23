import React from "react";
import FoodCardListView from "./FoodCardListView";

const FoodCardList = (props) => {
  return React.createElement(FoodCardListView, { ...props });
};

export default FoodCardList;
