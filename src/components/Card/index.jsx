import React from "react";
import "./card.scss";
const Card = ({
    id = "",
    title = "",
    subtitle = "",
    description = "",
    img = "",
    price = "",
    stock = "",
    key,
    className = "",
    extraComponent,
}) => {
    const classCondition = className ? ` ${className}` : "";
    return (
        <article className={`card${classCondition}`} key={key}>
            <div className="placeholder">
                <img src={img} alt={title} />
            </div>
            <div className="data-container">
                <div className="title-description-container">
                    {title && <h2 className="title">{title}</h2>}
                    {subtitle && <h3 className="subtitle">{subtitle}</h3>}
                    {description && (
                        <span className="description">{description}</span>
                    )}
                    {stock && <span className="stock">stock: {stock}</span>}
                </div>
                {price && <span className="price">${price}</span>}
            </div>
            <div></div>
            {extraComponent && (
                <div className="extra-component">{extraComponent}</div>
            )}
        </article>
    );
};

export default Card;
