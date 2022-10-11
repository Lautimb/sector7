import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item, qty) => {
        if (isInCart(item.id)) {
            addQty(item, Number(qty));
        } else {
            setCart([...cart, { ...item, qty }]);
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const addQty = (item, qty) => {
        const updateCart = cart.map((prod) =>
            prod.id === item.id ? { ...prod, qty: prod.qty + qty } : prod
        );
        setCart(updateCart);
    };

    const removeItem = (id) => {
        const deleteItem = cart.filter((item) => item.id !== id);
        setCart(deleteItem);
    };

    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total += Number(item.price) * Number(item.qty);
        });
        return total;
    };

    const totalQuantityProduct = (id) => {
        const productToCalc = cart.find((item) => item.id === id);
        const { qty } = productToCalc || {};
        if (qty === 0) {
            removeItem(id);
        }
        return qty;
    };

    const totalQuantityProducts = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.qty;
        });
        return total;
    };

    const totalProducts = () => cart.length;

    return (
        <CartContext.Provider
            value={{
                cart,
                clearCart,
                addToCart,
                removeItem,
                totalPrice,
                totalQuantityProduct,
                totalQuantityProducts,
                totalProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
