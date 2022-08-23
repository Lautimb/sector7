import React from "react";
import "./modal.scss";
const Modal = ({ children }) => {
  return <div className="overlay">{children}</div>;
};

export default Modal;
