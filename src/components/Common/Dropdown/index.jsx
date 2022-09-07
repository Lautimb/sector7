import React, { useState, useRef } from "react";
import Button from "../Button";

import "./dropdown.scss";

const Dropdown = ({ title, children }) => {
    const [open, setOpen] = useState(false);
    const dropdown = useRef();
    const icon = useRef();
    const handleDropdown = () => {
        setOpen(!open);
        icon.current.classList.toggle("--rotate");
    };
    return (
        <>
            <div className="dropdown" onClick={handleDropdown} ref={dropdown}>
                <div>
                    {title}
                    <Button className="--togle-dropdown">
                        <i className="fa-solid fa-caret-down" ref={icon} />
                    </Button>
                </div>
            </div>
            {open && <div className="children">{children}</div>}
        </>
    );
};

export default Dropdown;
