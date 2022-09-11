import React, { useState, useEffect } from "react";
import Card from "../Card";
import ItemCount from "../ItemCount";
import { useParams, Link } from "react-router-dom";
import { productsData } from "./productsData";

import "../Common/Button/button.scss";
import "./item-detail-container.scss";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [stock, setStock] = useState(false);
    const [showButtonCart, setShowButtonCart] = useState(false);

    const { itemId } = useParams();

    const onAdd = (count) => {
        stock > 0 && setStock(stock - count);
        setShowButtonCart(true);
    };

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
                setStock(result.stock);
            })
            .catch((err) => {
                console.log("error", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [itemId]);
    console.log(stock);
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
                    stock={stock}
                    img={product.img}
                    className="--detail"
                    extraComponent={
                        !showButtonCart ? (
                            <ItemCount
                                stock={stock}
                                onAdd={onAdd}
                                initial={stock === 0 ? 0 : 1}
                            />
                        ) : (
                            <Link to="/cart" className="button --primary --to-cart">
                                Ir al carrito
                            </Link>
                        )
                    }
                />
            )}
        </div>
    );
};

export default ItemDetailContainer;
