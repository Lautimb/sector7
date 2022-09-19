import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";
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

    const { addToCart, totalQuantityProduct } = useContext(CartContext);
    const { itemId } = useParams();

    const isEqualStockAndQuantityProduct =
        stock === totalQuantityProduct(product.id);

    const onAdd = (count) => {
        addToCart(product, count);
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
                            <>
                                <ItemCount
                                    stock={stock}
                                    onAdd={onAdd}
                                    initial={1}
                                    qtyProductInCart={totalQuantityProduct(
                                        Number(itemId)
                                    )}
                                />
                                {isEqualStockAndQuantityProduct && (
                                    <Link
                                        to="/cart"
                                        className="button --primary --to-cart --mt"
                                    >
                                        Terminar mi compra
                                    </Link>
                                )}
                            </>
                        ) : (
                            <Link
                                to="/cart"
                                className="button --primary --to-cart"
                            >
                                Terminar mi compra
                            </Link>
                        )
                    }
                />
            )}
        </div>
    );
};

export default ItemDetailContainer;
