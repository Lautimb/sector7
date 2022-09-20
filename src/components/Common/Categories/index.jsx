import React from "react";
import { NavLink } from "react-router-dom";

import "./categories.scss";

const Categories = () => {
    return (
        <ul className="categories-container">
            <li>
                <NavLink to="/category/auriculares">auriculares</NavLink>
            </li>
            <li>
                <NavLink to="/category/teclados">teclados</NavLink>
            </li>
            <li>
                <NavLink to="/category/camaras">camaras</NavLink>
            </li>
            <li>
                <NavLink to="/category/ratones">ratones</NavLink>
            </li>
            <li>
                <NavLink to="/category/monitores">monitores</NavLink>
            </li>
        </ul>
    );
};

export default Categories;
