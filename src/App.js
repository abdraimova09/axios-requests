import React, { useState } from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import AddProduct from "./components/AddProduct/AddProduct";
import Users from "./components/Users/Users";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import List from "./components/List/List";
import Edit from "./components/Edit/Edit";
import Details from "./components/Details/Details";

const App = () => {
  //! CRUD - Create, Read, Update, Delete

  const API = "http://localhost:8000/products";

  //! для хранения данных
  const [products, setProducts] = useState([]);
  const [oneProduct, setOneProduct] = useState(null);

  //! Create - POST

  async function addProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }

  //! Read - GET
  async function getProducts() {
    let res = await axios(API);
    setProducts(res.data);
    // console.log("from app.js", res);
  }
  // console.log(products);

  //! Delete - DELETE
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }
  //! Details, Edit - GET API/id
  async function getOneProduct(id) {
    let res = await axios(`${API}/${id}`);
    setOneProduct(res.data);
  }
  //! Update - PATCH, PUT
  async function updateProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }
  // console.log(oneProduct);
  return (
    // указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* header будет на всех наших страницах */}
      <Header />
      {/* для перечисления роутов */}
      <Routes>
        {/* непосредственно сами роуты */}
        <Route
          path="/"
          element={
            <List
              deleteProduct={deleteProduct}
              products={products}
              getProducts={getProducts}
            />
          }
        />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons-2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/add" element={<AddProduct addProduct={addProduct} />} />
        <Route
          path="/edit/:id"
          element={
            <Edit
              oneProduct={oneProduct}
              getOneProduct={getOneProduct}
              updateProduct={updateProduct}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <Details oneProduct={oneProduct} getOneProduct={getOneProduct} />
          }
        />
      </Routes>
      {/* footer будет на всех страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
    // <div>
    //   <Header />
    //   <Pokemons />
    //   <Pokemons2 />
    //   <RickAndMorty />
    //   <Users />
    // </div>
  );
};

export default App;
