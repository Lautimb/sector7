import React from "react";
import "./scss/app.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ItemListContainer saludo="¡Hola, Bienvenidos a nuestro sitio!" />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
