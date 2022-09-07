import React from "react";
import Card from "../Card";

const ItemList = ({ items = [] }) => {
    return (
        <>
            {items.map(({ id, title, subtitle, price, stock, img }) => {
                return (
                    <Card
                        id={id}
                        key={id}
                        title={title}
                        subtitle={subtitle}
                        price={price}
                        stock={stock}
                        img={img}
                        withLink
                    />
                );
            })}
        </>
    );
};

export default ItemList;
