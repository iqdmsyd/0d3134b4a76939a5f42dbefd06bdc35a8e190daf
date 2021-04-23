import React, { useState } from "react";
import FilterMenuBarView from "./FilterMenuBarView";

import createTwoWeeksDate from "../../utils/createTwoWeeksDate";

const FilterMenuBar = (props) => {
  const [open, setOpen] = useState(true);
  const dateList = createTwoWeeksDate();

  let lastScrollTop = 0;

  // function checkScroll(e) {
  //   var st = window.pageYOffset; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //   console.log(st);
  //   if (st > lastScrollTop) {
  //     // downscroll code
  //     setOpen(false);
  //   } else {
  //     // upscroll code
  //     setOpen(true);
  //   }
  //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // }

  // window.addEventListener("scroll", checkScroll);

  window.addEventListener(
    "wheel",
    (e) => {
      if (e.deltaY > 0) {
        console.log("down");
        setOpen(false);
      } else {
        console.log("up");
        setOpen(true);
      }
    },
    false
  );

  return React.createElement(FilterMenuBarView, { dateList, open });
};

export default FilterMenuBar;
