import React from "react";
import Card from "../../components/Card/card.component";
import Search from '../../components/search/search.component'
import data from "../../utils/data.json";
import './shop.scss'

const Shop = () => {
  return (
    <main className="shop-container">
      <div className="shop-header">
      <h1>Authentic Ilam Tea</h1>
      </div>
      <Search placeholder = 'Search'/>
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
