import React from "react";
import { Link } from "react-router-dom";
import SecondListIcons from "../NavBar/SecondListIcons";
import Search from "./Search";
import MenuButton from "../NavBar/MenuButton";
import Categories from "../Common/Categories";

import "./header.scss";

const Header = () => {
    return (
        <header className="header-site">
            <div className="header-top wrapper-site">
                <div className="logo-cotainer">
                    <Link to="/">
                        <h1>SECTOR 7</h1>
                    </Link>
                </div>
                <div className="icons-container">
                    <Search />
                    <ul className="second-list-icons">
                        <SecondListIcons />
                    </ul>
                </div>
            </div>
            <div className="header-bottom wrapper-site">
                <MenuButton />
                <Categories />
            </div>
        </header>
    );
};

export default Header;
