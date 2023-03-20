import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="450px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center ">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-9">
              Ecommerce Website
            </h5>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
