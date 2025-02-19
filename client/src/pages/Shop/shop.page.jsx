import React from "react";
import Card from "../../components/card/card.component";
import data from "../../utils/data.json";
import './Shop.scss'

const Shop = () => {
  return (
    <main className="shop-container">
      <div className="shop-header">
      <h1>Authentic Ilam Tea</h1>
      </div>
      {data.map(({ id, image, title, content, price, unit }) => (
        <Card
          key={id}
          image={image}
          title={title}
          content={content}
          price={`${price} ${unit}`}
        />
      ))}
    </main>
  );
};

export default Shop;
