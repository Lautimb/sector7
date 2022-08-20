import React from "react";
import "./navbar.scss";
import MenuButton from "./MenuButton";
import SecondListIcons from "./SecondListIcons";
const NavBar = () => {
  return (
    <nav className="menu-mobile">
      <div className="wrapper-site">
        <ul>
          <li>
            <a href="/home">
              <i className="fa-solid fa-house" />
              home
            </a>
          </li>
          <li>
            <MenuButton />
          </li>
          <SecondListIcons />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
