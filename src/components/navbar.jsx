import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="middle-logo">
        <li className="list-item">
          <Link to="/" className="link-light">
            Cartify
          </Link>
        </li>
      </ul>
      <div className="cart">
        <Link to="/cart">
          <ShoppingCart size={32}/>
        </Link>
      </div>
    </div>
  );
};
