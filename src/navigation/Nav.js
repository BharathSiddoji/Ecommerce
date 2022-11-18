import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  return (
    <div className="Nav-header">
      <img src="./assets/Logo.png" alt="Logo" />
      <Link className="text-link" to="/">
        Home
      </Link>
      <Link className="text-link" to="/Products">
        Products
      </Link>
      <Link className="text-link" to="/About">
        About
      </Link>
      <Link className="text-link" to="/Contact">
        Contact
      </Link>
      <Link className="text-link" to="/Cart">
        Cart
      </Link>
    </div>
  );
};

export default Nav;
