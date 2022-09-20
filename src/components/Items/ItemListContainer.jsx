import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import "./item-list-container.scss";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { categoryProduct } = useParams();

    useEffect(() => {
        const itemCollection = collection(db, "products");

        const filterProducts = categoryProduct
            ? query(itemCollection, where("category", "==", categoryProduct))
            : itemCollection;

        getDocs(filterProducts)
            .then((result) => {
                const products = result.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    };
                });
                setItems(products);
                setIsLoading(false);
            })
            .catch((err) => console.log(err));
    }, [categoryProduct]);

    return (
        <div className="item-list-container">
            {isLoading ? (
                <h2 className="loader">Cargando productos...</h2>
            ) : (
                <Layout>
                    <ItemList items={items} withLink />
                </Layout>
            )}
        </div>
    );
};

export default ItemListContainer;
