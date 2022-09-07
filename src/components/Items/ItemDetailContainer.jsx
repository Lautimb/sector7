import React, { useState, useEffect } from "react";
import Card from "../Card";
import ItemCount from "../ItemCount";
import { useParams } from "react-router-dom";
import { productsData } from "./productsData";

import "./item-detail-container.scss";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    productsData.find(
                        (product) => product.id === Number(itemId)
                    )
                );
            }, 300);
        });
        getItem
            .then((result) => {
                setProduct(result);
            })
            .catch((err) => {
                console.log("error", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [itemId]);

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
