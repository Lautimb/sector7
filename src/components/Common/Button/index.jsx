import React from "react";
import "./button.scss";
const Button = ({ onClick, className = "", children, type, title }) => {
  const extraClass = className ? ` --${className}` : "";
  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={`button${extraClass}`}
    >
      {children}
    </button>
  );
};

export default Button;
