import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products Details</Link>
        </li>
        <li>
          <products href="/checkout">Checkout</products>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
