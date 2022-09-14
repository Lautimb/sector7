import React from "react";
import Card from "../Card";

const ItemList = ({
    items = [],
    className,
    withLink = false,
}) => {
    const extraClass = className ? `${className}` : "";
    return (
        <>
            {items.map((item) => {
                return (
                    <Card
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        price={item.price}
                        stock={item.stock}
                        img={item.img}
                        className={extraClass}
                        withLink={withLink}
                    />
                );
            })}
        </>
    );
};

export default ItemList;
