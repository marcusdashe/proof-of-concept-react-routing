import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
