import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { Link } from "react-router-dom";
import productsdeatails from "./datadata";
import products from "./data";

function Filter() {
  const categories = [
    {
      id: "1",
      name: "Laptop",
    },
    {
      id: "2",
      name: "Mobile",
    },
  ];
  const brands = [
    {
      id: "1",
      categoriesId: "1",
      name: "HP",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/180px-HP_logo_2012.svg.png",
    },
    {
      id: "2",
      categoriesId: "1",
      name: "Dell",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Dell_logo_2016.svg/225px-Dell_logo_2016.svg.png",
    },
    {
      id: "3",
      categoriesId: "2",
      name: "Nokia",
    },
    {
      id: "4",
      categoriesId: "2",
      name: "Samsung",
    },
  ];

  const products = [
    {
      id: "1",
      brandId: "1",
      name: "HP 14s, 11th Gen Intel Core i3-1115G4",
      Image: "xyz-image",
    },
    {
      id: "2",
      brandId: "1",
      name: "HP 250 G8 Laptop ",
      Image: "xyz1-image",
    },
    {
      id: "3",
      brandId: "2",
      name: "Dell Vostro 3420 Laptop",
      Image: "xyz2-image",
    },
    {
      id: "4",
      brandId: "2",
      name: "Dell Inspiron 3520 Laptop",
      Image: "xyz3-image",
    },
    {
      id: "1",
      brandId: "3",
      name: "Nokia T21 with 10.36 2K Screen",
      Image: "xyz4-image",
    },
    {
      id: "2",
      brandId: "3",
      name: "Nokia 8210 4G Volte keypad Phone with Dual SIM",
      Image: "xyz5-image",
    },
    {
      id: "3",
      brandId: "4",
      name: "Samsung Galaxy S23 Ultra 5G",
      Image: "xyz6-image",
    },
    {
      id: "4",
      brandId: "4",
      name: "Samsung Galaxy M13",
      Image: "xyz7-image",
    },
  ];
  const images = [
    {
      id: "1",
      productId: "1",
      name: "HP 14s, 11th Gen Intel Core i3-1115G4",
      Image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "2",
      productId: "2",
      name: "HP 250 G8 Laptop ",
      Image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "3",
      productId: "3",
      name: "Dell Vostro 3420 Laptop",
      Image: "xyz2-image",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "4",
      productId: "4",
      name: "Dell Inspiron 3520 Laptop",
      Image: "xyz3-image",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "1",
      productId: "5",
      name: "Nokia T21 with 10.36 2K Screen",
      Image: "xyz4-image",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "2",
      productId: "6",
      name: "Nokia 8210 4G Volte keypad Phone with Dual SIM",
      Image: "xyz5-image",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "3",
      productId: "7",
      name: "Samsung Galaxy S23 Ultra 5G",
      Image: "xyz6-image",
      price: "$100",
      description: "Good Product",
    },
    {
      id: "4",
      productId: "8",
      name: "Samsung Galaxy M13",
      Image: "xyz7-image",
      price: "$100",
      description: "Good Product",
    },
  ];

  const [category, setCategories] = useState([]);
  const [brand, setBrands] = useState([]);
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    setCategories(category);
  }, []);

  const handleCategories = (id) => {
    const dt = brands.filter((x) => x.categoriesId === id);
    setBrands(dt);
  };

  const handleBrands = (id) => {
    const dt = products.filter((x) => x.brandId === id);
    setProduct(dt);
  };

  const handleImage = (id) => {
    const dt = images.filter((x) => x.productId === id);
    setImage(dt);
  };
  return (
    <div className="row">
      <div class="col-3">
        <label for="cars">Catagogies:</label>
        <select
          id="ddlCategories"
          className="form-control"
          onChange={(e) => handleCategories(e.target.value)}
        >
          <option value="0">Select Categories:</option>
          {categories && categories !== undefined
            ? categories.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No Categories"}
        </select>
        <br />
        {/* <label for="cars">Brand:</label>
        <select
          id="ddlBrands"
          className="form-control"
          onChange={(e) => handleBrands(e.target.value)}
        >
          <option value="0">Select Brand:</option>
          {brand && brand !== undefined
            ? brand.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No Brand"}
        </select>
        <br />
        <label for="cars">Product:</label>
        <select
          id="ddlProduct"
          className="form-control"
          onChange={(e) => handleImage(e.target.value)}
        >
          <option value="0">Select Product:</option>
          {product && product !== undefined
            ? product.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>
                    {ctr.name}
                  </option>
                );
              })
            : "No product"}
        </select> */}
        <br />
      </div>
      <div class="col-9">
        <div className="row">
          <div class="col-3">
            {brand && brand !== undefined
              ? brand.map((ctr, index) => {
                  return (
                    <>
                      <div class="container text-center">
                        <div class="row g-2">
                          <div class="col-6">
                            <div class="row g-2 ">
                              {/* <img
                                src={ctr.Image}
                                className="rounded-circle shadow-4-strong"
                                width="30"
                                height="50"
                                alt={ctr.Image}
                              />
                              <p>{ctr.name}</p> */}
                              {productsdeatails.map((product) => {
                                return (
                                  <article key={product.id}>
                                    <img
                                      src={product.image}
                                      className="rounded-circle shadow-4-strong"
                                      width="30"
                                      height="50"
                                      alt={product.image}
                                    />

                                    <Link to={`/products/${product.id}`}>
                                      <h5>{product.name}</h5>
                                    </Link>
                                  </article>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })
              : "No Image"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
