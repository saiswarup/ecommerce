import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="#">
            Molex
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Brands
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="#">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div class="buttons">
              <NavLink to="" class="btn btn-outline-dark">
                <i class="fa fa-sign-in me-1"></i> LogIn
              </NavLink>
              <NavLink to="" class="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="" class="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i> Cart(0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
