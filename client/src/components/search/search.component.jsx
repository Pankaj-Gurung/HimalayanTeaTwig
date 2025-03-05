import React from "react";
import "./search.scss";

export const Search = (props) => {
  const { placeholder, title } = props;
  return (
    <main className="search-container">
      <input type="search" name="" id="" placeholder={placeholder} />
    </main>
  );
};
