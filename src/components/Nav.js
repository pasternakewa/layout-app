import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <h2>MAKEUP SHOWROOM</h2>
      <ul className="nav-links">
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
