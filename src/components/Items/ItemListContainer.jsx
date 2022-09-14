import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { productsData } from "./productsData";

import "./item-list-container.scss";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                resolve(
                    categoryId
                        ? productsData.filter(
                              (product) =>
                                  product.category === Number(categoryId)
                          )
                        : productsData
                );
            }, 300);
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
    }, [categoryId]);
    return (
        <div className="item-list-container">
            {isLoading ? (
                <h2 className="loader">Cargando productos...</h2>
            ) : (
                <Layout>
                    <ItemList items={items} withLink/>
                </Layout>
            )}
        </div>
    );
};

export default ItemListContainer;
