import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/Items/ItemListContainer";
import ItemDetailContainer from "./components/Items/ItemDetailContainer";
import Main from "./components/Main";
import Cart from "./components/Cart";
import User from "./components/User";
import Favs from "./components/Favs";
import CartProvider  from "./context/CartContext";

import "./scss/app.scss";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <Main>
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />} />
                        <Route
                            exact
                            path="/item/:itemId"
                            element={<ItemDetailContainer />}
                        />
                        <Route
                            exact
                            path="/category/:categoryProduct"
                            element={<ItemListContainer />}
                        />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/favoritos" element={<Favs />} />
                        <Route exact path="/usuario" element={<User />} />
                    </Routes>
                </Main>
                <NavBar />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;
