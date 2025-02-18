import React from "react";
import "./Button.scss";

const Button = (props) => {
  const { title, children } = props;
  return (
    <main className="button-container">
    <div className="button-wrapper">
      <button title={title}>{children}</button>
    </div>
    </main>
  );
};

export default Button;
