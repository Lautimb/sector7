import React from "react";
import "./item-list-container.scss";
const ItemListContainer = ({ saludo = "" }) => {
  return (
    <div className="item-list-container">
      <h2>{saludo}</h2>
    </div>
  );
};

export default ItemListContainer;
