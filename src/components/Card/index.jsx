import React from "react";
import "./card.scss";
const Card = ({
    id = "",
    title = "",
    description = "",
    img = "",
    price = "",
    stock = "",
}) => {
    return (
        <article className="card" key={id}>
            <div className="placeholder">
                <img src={img} alt={title} />
            </div>
            <div className="data-container">
                <div className="title-description-container">
                    <h2 className="title">{title}</h2>
                    <h3 className="description">{description}</h3>
                    <span className="stock">stock: {stock}</span>
                </div>
                <span className="price">${price}</span>
            </div>
        </article>
    );
};

export default Card;
