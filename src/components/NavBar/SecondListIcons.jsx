import React from "react";

const SecondListIcons = () => {
  return (
    <>
      <li>
        <a href="/favoritos">
          <i className="fa-regular fa-heart" />
          favs
        </a>
      </li>
      <li>
        <a href="/carrito">
          <i className="fa-solid fa-cart-shopping" />
          carrito
        </a>
      </li>
      <li>
        <a href="/usuario">
          <i className="fa-regular fa-user" />
          usuario
        </a>
      </li>
    </>
  );
};

export default SecondListIcons;
