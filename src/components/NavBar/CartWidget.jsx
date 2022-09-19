import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { totalQuantityProducts } = useContext(CartContext);
    return (
        <NavLink to="/cart" className="to-cart">
            <i className="fa-solid fa-cart-shopping" />
            {totalQuantityProducts() === 0 ? (
                <></>
            ) : (
                <span className="products-in-cart">
                    {totalQuantityProducts()}
                </span>
            )}
            <span className="label">carrito</span>
        </NavLink>
    );
};

export default CartWidget;
