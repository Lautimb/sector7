import React from "react";
import MenuButton from "./MenuButton";
import SecondListIcons from "./SecondListIcons";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const NavBar = () => {
    return (
        <nav className="navbar-mobile">
            <div className="wrapper-site">
                <ul>
                    <li>
                        <NavLink to="/">
                            <i className="fa-solid fa-house" />
                            home
                        </NavLink>
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
