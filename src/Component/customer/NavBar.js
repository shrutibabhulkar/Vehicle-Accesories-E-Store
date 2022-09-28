import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Cart from "./Cart";
import Chair from "./SafetyAccessories";
import Home from "./Home";
import Sofa from "./Batteries";
import Table from "./ProductDetail";

function NavBar() {
  let loginData = localStorage.getItem("loginDetails")
    ? localStorage.getItem("loginDetails")
    : null;
  if (loginData) {
    loginData = JSON.parse(loginData);
  }

  const editUser = () => {
    console.log(loginData);
    console.log(loginData.id);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top ">
        <div className="container-fluid ">
          <Link className="navbar-brand text-dark display-6" to="/">
             Vehicle Accessories
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon border border-2 border-dark"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/About">
                  About
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item text-dark" to="/BodyParts">
                      Body Parts
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/Batteries">
                      Batteries
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-dark"
                      to="/SafetyAccessories"
                    >
                      Safety Accessories
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul
                  className="dropdown-menu text-dark"
                  aria-labelledby="navbarDropdown"
                >
                  {loginData ? (
                    <li>
                      <Link className="dropdown-item text-dark" to="/Logout">
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link className="dropdown-item text-dark" to="/Login">
                        Login
                      </Link>
                    </li>
                  )}
                  {loginData ? (
                    <li>
                      <Link className="dropdown-item text-dark" to="/order">
                        MyOrder
                      </Link>
                    </li>
                  ) : (
                    <li>
                      <Link className="dropdown-item text-dark" to="/Register">
                        Signup
                      </Link>
                    </li>
                  )}
                  {loginData ? (
                    <li>
                      <Link
                        className="dropdown-item text-dark"
                        to="/admin/edit-user"
                      >
                        Edit Profile
                      </Link>
                    </li>
                  ) : (
                    ``
                  )}
                </ul>
              </li>
              {loginData ? (
                <li>
                  <Link className="nav-link text-dark" to="/Cart">
                    Cart <i class="fas fa-shopping-cart"></i>
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="nav-link text-dark btn btn-sm btn-light mx-2"
                    to="/login"
                  >
                    Login/SignUp
                  </Link>
                </li>
              )}
            </ul>
             <form className="d-flex">
              <input
                className="form-control me-2 text-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-dark"
                type="submit"
              >
                Search
              </button>
            </form> 
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
