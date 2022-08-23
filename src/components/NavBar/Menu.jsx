import React, { useRef } from "react";
import Button from "../Common/Button";
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
      <ul>
        <li>productos</li>
        <li>preguntas frecuentes</li>
        <li>redes sociales</li>
        <li>no se que mas</li>
        <li>ayuda</li>
      </ul>
    </nav>
  );
};

export default Menu;
