import React from "react";
import "./button.scss";

export default Button = (props) => {
  const { title, children, style } = props;
  return (
    <main className="button-container">
      <div className="button-wrapper">
        <button title={title}>{children}</button>
      </div>
    </main>
  );
}; 
