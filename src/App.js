import React from "react";
import "./scss/app.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/Items/ItemListContainer";
import Main from "./components/Main";
function App() {
    return (
        <div className="App">
            <Header />
            <Main>
                <ItemListContainer />
            </Main>
            <NavBar />
        </div>
    );
}

export default App;
