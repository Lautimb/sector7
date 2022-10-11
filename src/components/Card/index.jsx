import React from "react";
import Button from "../Common/Button";
import { ConditionalLinkContainer } from "../Containers/ConditionalLinkContainer";
import { NavLink } from "react-router-dom";

import "./card.scss";

const Card = ({
    id = "",
    title = "",
    subtitle = "",
    description = "",
    img = "",
    price = "",
    stock = "",
    className = "",
    extraComponent = false,
    withLink,
    deleteProductCart = false,
    qty,
    isCart = false,
}) => {
    const classCondition = className ? ` ${className}` : "";
    return (
        <article className={`card${classCondition}`}>
            <ConditionalLinkContainer withLink={withLink} to={`/item/${id}`}>
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
                        {(stock || stock === 0) && (
                            <span className="stock">stock: {stock}</span>
                        )}
                    </div>
                    {price && <span className="price">${price}</span>}
                    {qty && <span>x {qty}</span>}
                    {isCart && (
                        <NavLink className="to-cart" to={`/item/${id}`}>
                            Ver producto
                        </NavLink>
                    )}
                </div>
                {extraComponent && (
                    <div className="extra-component">{extraComponent}</div>
                )}
                {deleteProductCart && (
                    <Button
                        onClick={() => deleteProductCart(id)}
                        className="--remove-product"
                    >
                        <i className="fa-solid fa-xmark" />
                    </Button>
                )}
            </ConditionalLinkContainer>
        </article>
    );
};

export default Card;
