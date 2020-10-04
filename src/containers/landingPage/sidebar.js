import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <a className="menu-item item-font" href="/start">
        Start
      </a>

      <a className="menu-item item-font" href="/map">
        Map
      </a>

      <a className="menu-item item-font" href="/build">
        Build
      </a>

      <a className="menu-item item-font" href="/team">
        Team
      </a>

      <a className="menu-item item-font" href="/exit">
        Exit
      </a>
    </Menu>
  );
};
