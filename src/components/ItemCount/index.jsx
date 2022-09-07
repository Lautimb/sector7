import React, { useState, useEffect } from "react";
import Button from "../Common/Button";
import "./item-count.scss";

const ItemCount = ({ stock = 0, initial, onAdd = () => {} }) => {
    const [count, setCount] = useState(initial);
    const [stockQuant, setStockQuant] = useState(stock);
    const addItem = () => {
        if (count < stockQuant) setCount(count + 1);
    };
    const takeOffItem = () => {
        if (count > 0) setCount(count - 1);
    };
    useEffect(() => {
        setCount(initial);
        if (stockQuant === 0) {
            setCount("Sin STOCK");
            const onAddBtn = document.querySelector("#on-add-btn");
            if (onAddBtn) onAddBtn.setAttribute("disabled", "");
        }
    }, [stockQuant, initial]);

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
                    setStockQuant(stockQuant - count);
                }}
                className="--primary"
                label="Agregar al carrito"
                id="on-add-btn"
            />
        </div>
    );
};

export default ItemCount;
