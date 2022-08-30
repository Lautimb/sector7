import React, { useState, useEffect } from "react";
import "./item-list-container.scss";
import Layout from "../Layout";
import ItemList from "./ItemList";
import { products } from "./products";
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getItems
            .then((result) => {
                setItems(result);
            })
            .catch((err) => {
                console.log("error", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);
    return (
        <div className="item-list-container">
            {isLoading ? (
                <h2>Cargando productos...</h2>
            ) : (
                <Layout>
                    <ItemList items={items} />
                </Layout>
            )}
        </div>
    );
};

export default ItemListContainer;
