import { useParams } from "react-router-dom";
import products from "./data";
import Skeleton from "react-loading-skeleton";
import React, { useState, useEffect } from "react";

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, name, price, description, rating } = product;
  const [loading, setLoading] = useState(false);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={image} alt={name} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{name}</h1>
          <p className="display-5">${price}</p>

          <p className="lead fw-bolder">
            Rating {rating}
            <i className="fa fa-star"></i>
          </p>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2">
            Add to cart
          </button>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
