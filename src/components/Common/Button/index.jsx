import React from "react";
import "./button.scss";
const Button = ({
  onClick,
  className = "",
  children,
  type,
  title,
  label,
  ...r
}) => {
  const extraClass = className ? ` ${className}` : "";
  return (
    <button
      onClick={onClick}
      type={type}
      title={title}
      className={`button${extraClass}`}
      {...r}
    >
      {children}
      {label && <span className="text">{label}</span>}
    </button>
  );
};

export default Button;
