import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./component/Products1";
import Product from "./component/Product";
import React, { useState, useEffect } from "react";
import SingleProduct from "./component/SingleProduct";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        {/* <Route exact path="/products/:id" component={Product} /> */}
        <Route exact path="/products/:productId" component={SingleProduct} />
      </Switch>
      {/* <Home></Home> */}
    </>
  );
}

export default App;
