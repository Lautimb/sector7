import React, {useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from "../Common/Button";
import Card from "../Card";

import "./cart.scss";

const Cart = () => {
    const { cart, clearCart, removeItem, totalPrice, totalQuantityProduct } =
        useContext(CartContext);

    return (
        <div className="cart">
            <h2>CARRITO</h2>
            {cart.length ? (
                <Button className="--primary --clear-cart" onClick={clearCart}>
                    Limpiar carrito
                </Button>
            ) : null}
            <div className="grid">
                <div className="products-container">
                    {cart.map((item) => {
                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                price={item.price}
                                stock={item.stock}
                                img={item.img}
                                className="--product-cart"
                                deleteProductCart={removeItem}
                                qty={totalQuantityProduct(item.id)}
                                isCart
                            />
                        );
                    })}
                </div>
                {cart.length ? (
                    <div className="cart-details-container">
                        <span>Total:</span>
                        <span>{Number(totalPrice())}</span>
                    </div>
                ) : (
                    <div className="without-products">
                        PORFAVOR AGREGA PRODUCTOS AL CARRITO{" "}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
