import React from "react";

import Navigationitems from "../NavigationItems/NavigationItems";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <nav>
        <Navigationitems />
      </nav>
    </header>
  );
};

export default Toolbar;
