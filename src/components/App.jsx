import "../styles/App.scss";
// import callToApi from "../services/api";
import localStorage from "../services/localStorage";
import { useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Form from "./Form";
import Landing from "./Landing";

function App() {
  // Estados

  const [product, setProduct] = useState("");
  const [productsList, setProductsList] = useState(
    localStorage.get("productList", [])
  );

  // Funciones
  const filteredProducts = productsList.filter((item) => {
    return item.toLowerCase().includes(product.toLowerCase());
  });

  // Eventos

  const changeInputValue = (value) => {
    setProduct(value);
  };

  const changeProductsList = (value) => {
    localStorage.set("productList", [...productsList, value]);
    setProduct("");
    setProductsList([...productsList, value]);
  };

  return (
    <>
      <Landing
        onChangeInput={changeInputValue}
        product={product}
        onChangeProductsList={changeProductsList}
        productsList={filteredProducts}
      />
    </>
  );
}

export default App;
