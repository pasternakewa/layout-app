import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div className="nav-container">
    <nav>
      <p className="title">MAKEUP SHOWROOM</p>
      <ul className="nav-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
