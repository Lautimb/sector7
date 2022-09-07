import React from "react";
import { NavLink } from "react-router-dom";

import "./categories.scss";

const Categories = () => {
    return (
        <ul className="categories-container">
            <li>
                <NavLink to="/category/1">auriculares</NavLink>
            </li>
            <li>
                <NavLink to="/category/2">teclados</NavLink>
            </li>
            <li>
                <NavLink to="/category/3">camaras</NavLink>
            </li>
            <li>
                <NavLink to="/category/4">ratones</NavLink>
            </li>
            <li>
                <NavLink to="/category/5">monitores</NavLink>
            </li>
        </ul>
    );
};

export default Categories;
