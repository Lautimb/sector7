import React, { useRef } from "react";
import Button from "../Common/Button";
import Dropdown from "../Common/Dropdown";
import Categories from "../Common/Categories";

import "./menu.scss";

const Menu = ({ handleClose = () => {} }) => {
    const menu = useRef();
    const fadeOutAnimation = () => {
        setTimeout(() => handleClose(false), 300);
        if (menu.current !== undefined) {
            menu.current.classList.add("--close");
        }
    };
    return (
        <nav className="menu" ref={menu}>
            <Button onClick={fadeOutAnimation}>
                <i className="fa-solid fa-xmark" />
            </Button>
            <ul className="list-container">
                <li>
                    <Dropdown title="categorias">
                        <Categories />
                    </Dropdown>
                </li>
                <li>preguntas frecuentes</li>
                <li>redes sociales</li>
                <li>envios</li>
                <li>ayuda</li>
            </ul>
        </nav>
    );
};

export default Menu;
