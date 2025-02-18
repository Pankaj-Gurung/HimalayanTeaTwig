import React from "react";
import "./card.scss";

const Card = (props) => {
  const { image, title, content, price } = props;
  return (
    <main className="card-container">
      <div className="card-wrapper">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{content}</p>
        <span>{price}</span>
      </div>
    </main>
  );
};

export default Card;
