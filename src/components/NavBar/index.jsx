import React from "react";
import "./navbar.scss";
import MenuButton from "./MenuButton";
import SecondListIcons from "./SecondListIcons";
const NavBar = () => {
  return (
    <nav className="navbar-mobile">
      <div className="wrapper-site">
        <ul>
          <li>
            <a href="/home">
              <i className="fa-solid fa-house" />
              home
            </a>
          </li>
          <li>
            <MenuButton label="menu">
              <i className="fa-solid fa-bars" />
            </MenuButton>
          </li>
          <SecondListIcons />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
