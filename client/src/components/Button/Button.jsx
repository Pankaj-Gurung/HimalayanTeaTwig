import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { title, children } = props;
  return (
    <>
      <button title={title}>{children}</button>
    </>
  );
};

export default Button;
