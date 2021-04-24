import React, { useState } from "react";
import FilterMenuBarView from "./FilterMenuBarView";

import createTwoWeeksDate from "../../utils/createTwoWeeksDate";
const dateList = createTwoWeeksDate();

const FilterMenuBar = (props) => {
  const [open, setOpen] = useState(true); // open or close meals-type-toggle
  const [dps, setDps] = useState(0); // date-picker wrapper touch start position value
  const [swipe, setSwipe] = useState(""); // swipe direction

  const handleTouchStart = (e) => {
    setDps(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    let dpe = e.changedTouches[0].clientX;
    if (dps > dpe) {
      setSwipe("left");
    } else if (dps < dpe) {
      setSwipe("right");
    }
  };

  // works in browser
  window.addEventListener(
    "wheel",
    (e) => {
      if (e.deltaY > 0) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    },
    false
  );

  // works in mobile
  let ts; // touch start
  document.addEventListener("touchstart", (e) => {
    ts = e.targetTouches[0].clientY;
  });

  document.addEventListener("touchmove", (e) => {
    let te = e.changedTouches[0].clientY; // touch end value
    if (ts > te) {
      setOpen(false);
    } else if (ts < te) {
      setOpen(true);
    }
  });

  return React.createElement(FilterMenuBarView, {
    dateList,
    open,
    handleTouchStart,
    handleTouchMove,
    swipe,
    ...props,
  });
};

export default FilterMenuBar;
