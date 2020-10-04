import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-router-dom';

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
      
      <Link className="menu-item item-font" to='/assemble'>
        Start
      </Link>      

      <a className="menu-item item-font" href="/#">
        Map
      </a>

      <Link className="menu-item item-font" to='/assemble'>
        Build
      </Link>      

      <a className="menu-item item-font" href="/team">
        Team
      </a>

      <a className="menu-item item-font" href="/exit">
        Exit
      </a>
    </Menu>
  );
};
