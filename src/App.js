import React, { useState } from "react";
import "./scss/app.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";
function App() {
  const [stock, setStock] = useState(10);
  const onAdd = (count) => {
    console.log(typeof count);
    if (count < stock && typeof count === "number") {
      setStock(stock - count);
    }
  };
  return (
    <div className="App">
      <Header />
      <main>
        <ItemListContainer saludo="¡Hola, Bienvenidos a nuestro sitio!" />
        <ItemCount stock={stock} initial={stock > 0 ? 1 : "Sin Stock"} onAdd={onAdd} />
      </main>
      <NavBar />
    </div>
  );
}

export default App;
