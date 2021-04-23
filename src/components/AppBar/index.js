// import { AppBar } from "./AppBar";

// export default AppBar;

import React from "react";
import AppBarView from "./AppBarView";

const AppBar = (props) => {
  return React.createElement(AppBarView, { ...props });
};

export default AppBar;
