import React, { useState } from "react";
import FilterMenuBarView from "./FilterMenuBarView";

import createTwoWeeksDate from "../../utils/createTwoWeeksDate";

const FilterMenuBar = (props) => {
  const [open, setOpen] = useState(true);
  const dateList = createTwoWeeksDate();

  // let lastScrollTop = 0;

  // function checkScroll(e) {
  //   var st = window.pageYOffset; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
  //   if (st > lastScrollTop) {
  //     // downscroll code
  //     setOpen(false);
  //   } else if (st < lastScrollTop) {
  //     // upscroll code
  //     setOpen(true);
  //   }
  //   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  // }

  // window.addEventListener("scroll", checkScroll, false);

  // work in browser
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

  // work in mobile
  let ts;
  document.addEventListener("touchstart", (e) => {
    ts = e.targetTouches[0].clientY;
  });

  document.addEventListener("touchmove", (e) => {
    let te = e.changedTouches[0].clientY;
    if (ts > te) {
      setOpen(false);
    } else if (ts < te) {
      setOpen(true);
    }
  });

  return React.createElement(FilterMenuBarView, { dateList, open });
};

export default FilterMenuBar;
