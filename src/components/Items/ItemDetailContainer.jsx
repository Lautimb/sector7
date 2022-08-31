import React, { useState, useEffect } from "react";
import Card from "../Card";
import { productData } from "./product";
import ItemCount from "../ItemCount";

import "./item-detail-container.scss";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productData);
            }, 2000);
        });
        getItems
            .then((result) => {
                setProduct(result);
            })
            .catch((err) => {
                console.log("error", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [product]);

    return (
        <div className="item-detail-container">
            {isLoading ? (
                <h2 className="loader">Cargando producto...</h2>
            ) : (
                <Card
                    title={product.title}
                    subtitle={product.subtitle}
                    description={product.description}
                    price={product.price}
                    stock={product.stock}
                    img={product.img}
                    className="--detail"
                    extraComponent={<ItemCount />}
                />
            )}
        </div>
    );
};

export default ItemDetailContainer;
