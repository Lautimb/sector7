import React, { useState } from "react";
import { createPortal } from "react-dom";
import Button from "../Common/Button";
import Modal from "../Common/Modal";
import Menu from "./Menu";
const MenuButton = ({ label = "" }) => {
    const [isOpened, setIsOpened] = useState(false);
    const root = document.querySelector("#root");
    const handleMenu = () => {
        setIsOpened(!isOpened);
    };

    return (
        <>
            <Button onClick={handleMenu} label={label} className="menu-button">
                <i className="fa-solid fa-bars" />
            </Button>
            {isOpened
                ? createPortal(
                      <>
                          <Modal>
                              <Menu handleClose={setIsOpened} />
                          </Modal>
                      </>,
                      root
                  )
                : null}
        </>
    );
};

export default MenuButton;
