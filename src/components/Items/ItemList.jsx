import React from "react";
import Card from "../Card";

const ItemList = ({ items = [] }) => {
    return (
        <>
            {items.map(({ id, title, description, price, stock, img }) => {
                return (
                    <Card
                        id={id}
                        title={title}
                        description={description}
                        price={price}
                        stock={stock}
                        img={img}
                    />
                );
            })}
        </>
    );
};

export default ItemList;
