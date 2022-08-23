import React from "react";
import CartWidget from "./CartWidget";
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
        <CartWidget />
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
