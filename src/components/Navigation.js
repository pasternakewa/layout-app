import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
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
}
