import React from "react";

export const Button = (props) => {
  const { type = "button", title, onClick, variant = "default" } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`button ${
        variant === "primary" ? "primary" : variant === "danger" ? "danger" : ""
      }`}
    >
      {title}
    </button>
  );
};
