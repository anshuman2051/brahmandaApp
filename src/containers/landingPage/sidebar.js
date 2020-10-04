import React from "react";
import { slide as Menu } from "react-burger-menu";
<<<<<<< HEAD
=======
import {Link} from 'react-router-dom';
>>>>>>> 6bd365bf6e294b9d6e5a0aad2dd614895031121f

export default props => {
  return (
    // Pass on our props
    <Menu {...props} right>
<<<<<<< HEAD
      <a className="menu-item item-font" href="/start">
        Start
      </a>

      <a className="menu-item item-font" href="/map">
        Map
      </a>

      <a className="menu-item item-font" href="/build">
        Build
      </a>
=======
      
      <Link className="menu-item item-font" to='/assemble'>
        Start
      </Link>      

      <a className="menu-item item-font" href="/#">
        Map
      </a>

      <Link className="menu-item item-font" to='/assemble'>
        Build
      </Link>      
>>>>>>> 6bd365bf6e294b9d6e5a0aad2dd614895031121f

      <a className="menu-item item-font" href="/team">
        Team
      </a>

      <a className="menu-item item-font" href="/exit">
        Exit
      </a>
    </Menu>
  );
};
