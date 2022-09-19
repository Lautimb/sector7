import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import "./second-list-icons.scss";
const SecondListIcons = () => {
    return (
        <>
            <li>
                <NavLink to="/favoritos" className="to-fav">
                    <i className="fa-regular fa-heart" />
                    <span className="label">favs</span>
                </NavLink>
            </li>
            <li>
                <CartWidget />
            </li>
            <li>
                <NavLink to="/usuario" className="to-user">
                    <i className="fa-regular fa-user" />
                    <span className="label">usuario</span>
                </NavLink>
            </li>
        </>
    );
};

export default SecondListIcons;
