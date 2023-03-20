import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Category from "./Category";
import Records from "./data.json";
import Filter from "./Filter";

const Products = () => {
  const [data, setDate] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response = await fetch("https://fakestoreapi.com/products");
      const response = await fetch("https://dummyjson.com/products");

      if (componentMounted) {
        setDate(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        {" "}
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4" key={product.id}>
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}....
                    </h5>
                    <p className="card-text lead fw-bold">${product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  const ShowDetails = () => {
    return (
      <>
        <select class="form-select" aria-label="Default select example">
          {filter.map((product) => {
            return <option value={product.id}>{product.category}</option>;
          })}
        </select>
      </>
    );
  };

  const CatagoryDetails = () => {
    return (
      <>
        <select class="form-select" aria-label="Default select example">
          {Records.map((record) => {
            return <option value={record.id}>{record.category}</option>;
          })}
        </select>
      </>
    );
  };
  const BrandDetails = () => {
    return (
      <>
        <select class="form-select" aria-label="Default select example">
          {Records.map((record) => {
            return <option value={record.id}>{record.brand}</option>;
          })}
        </select>
      </>
    );
  };
  const NameDetails = () => {
    return (
      <>
        <select class="form-select" aria-label="Default select example">
          {Records.map((record) => {
            return <option value={record.id}>{record.name}</option>;
          })}
        </select>
      </>
    );
  };

  const ImageDetails = () => {
    return (
      <>
        <select class="form-select" aria-label="Default select example">
          {Records.map((record) => {
            return <option value={record.id}>{record.image}</option>;
          })}
        </select>
      </>
    );
  };
  const ImageProducts = () => {
    return (
      <>
        {Records.map((record) => {
          return (
            <>
              <div className="col-md-3">
                <div className="card">
                  <img
                    src={record.image}
                    className="card-img-top"
                    alt={record.title}
                  />
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-4 py-4">
        {/* <div className="row">
          <div className="col-9 mb-4">
            <h1 className="display-4 fw-bolder text-center">Latest Product</h1>
          </div>
        </div> */}

        <div>
          {/* {<ShowProducts />} */}
          {<Filter> </Filter>}
          {/* <div class="col-3">
            {<Filter> </Filter>}
            <div class="row">
              <button type="button" class="btn btn-primary ms-2">
                Submit
              </button>
            </div>
          </div>

          <div class="col-9">
            <div className="row"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Products;
