import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav-container">
      <nav>
      <NavLink to="/" activeStyle={{ borderBottom:"0px solid" }}><p className="title">MAKEUP SHOWROOM</p></NavLink> 
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
