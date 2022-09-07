import React from "react";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (
        <NavLink to="/carrito" className="to-cart">
            <i className="fa-solid fa-cart-shopping" />
            <span>carrito</span>
        </NavLink>
    );
};

export default CartWidget;
