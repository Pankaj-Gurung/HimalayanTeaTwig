import React from "react";
import "./card.scss";

export const Card = (props) => {
  const { image, title, content, price, style } = props;
  return (
    <main className="card-container">
      <div className="card-wrapper">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{content}</p>
        <span>Price: Rs. {price}</span>
      </div>
    </main>
  );
};
