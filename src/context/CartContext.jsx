import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (item, qty) => {
        if (isInCart(item.id)) {
            addQty(item, qty);
        } else {
            setCart([...cart, { ...item, qty }]);
        }
    };

    // Limpiar carrito
    const clearCart = () => {
        setCart([]);
    };

    // Validacion si el producto esta en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    // Agregar cantidad
    const addQty = (item, qty) => {
        const updateCart = cart.map((prod) =>
            prod.id === item.id ? { ...prod, qty: prod.qty + qty } : prod
        );
        setCart(updateCart);
    };

    // Borrar producto
    const removeItem = (id) => {
        const deleteItem = cart.filter((item) => item.id !== id);
        setCart(deleteItem);
    };

    // Total precio del carrito
    const totalPrice = () => {
        let total = 0;
        cart.forEach((item) => {
            total = total + item.price * item.qty;
        });
        return total;
    };

    // Retorna total de cantidad y remueve el item si la qty es 0
    const totalQuantityProduct = (id) => {
        const productToCalc = cart.find((item) => item.id === id);
        const { qty } = productToCalc || {};
        if (qty === 0) {
            removeItem(id);
        }
        return qty;
    };

    // Total cantidad de productos
    const totalQuantityProducts = () => {
        let total = 0;
        cart.forEach((item) => {
            total += item.qty;
        });
        return total;
    };

    // Total productos
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
