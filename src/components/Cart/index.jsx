import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import Button from "../Common/Button";
import Card from "../Card";
import Form from "../Form";
import Modal from "../Common/Modal";

import "./cart.scss";

const Cart = () => {
    const [orderId, setOrderId] = useState(false);
    const { cart, clearCart, removeItem, totalPrice, totalQuantityProduct } =
        useContext(CartContext);
    const total = Number(totalPrice());
    const getOrderId = (orderId) => {
        setOrderId(orderId);
    };
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
                        <h3>
                            <span>Total:</span>
                            <span>{total}</span>
                        </h3>
                        <Form
                            cart={cart}
                            total={total}
                            clearCart={clearCart}
                            getOrderId={getOrderId}
                        />
                    </div>
                ) : (
                    <div className="without-products">
                        Para agregar productos al carrito haz{" "}
                        <NavLink to="/" className="active">
                            click aquí
                        </NavLink>
                    </div>
                )}
            </div>
            {orderId && (
                <Modal>
                    <div className="order-container">
                        <Button onClick={() => setOrderId(false)}>
                            <i className="fa-solid fa-xmark" />
                        </Button>
                        <h4>
                            Gracias por tu compra, tu numero de orden es:{" "}
                            <span className="order-id">{orderId}</span>
                        </h4>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default Cart;
