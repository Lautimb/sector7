import React, { useState, useEffect } from "react";
import Button from "../Common/Button";
import { useParams } from "react-router-dom";

import "./item-count.scss";

const ItemCount = ({
    stock = 0,
    initial,
    onAdd = () => {},
    qtyProductInCart = 0,
}) => {
    const [count, setCount] = useState(initial);
    const { itemId } = useParams();
    useEffect(() => {
        if (stock === qtyProductInCart) {
            setCount(0);
        }
    }, [stock, qtyProductInCart, itemId]);

    const addItem = () => {
        if (count + qtyProductInCart < stock) setCount(count + 1);
    };

    const takeOffItem = () => {
        if (count + qtyProductInCart > 0) setCount(count - 1);
    };

    return (
        <div className="item-count">
            <div className="counter-container">
                <Button onClick={takeOffItem}>
                    <i className="fa-solid fa-minus" />
                </Button>
                <span className="counter">{count}</span>
                <Button onClick={addItem}>
                    <i className="fa-solid fa-plus" />
                </Button>
            </div>
            <Button
                onClick={() => {
                    onAdd(count);
                }}
                className="--primary"
                label={count >= 0 ? "Agregar al carrito" : "Quitar del carrito"}
                id="on-add-btn"
            />
        </div>
    );
};

export default ItemCount;
