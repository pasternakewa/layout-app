import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = () => (
  <div className="nav-container">
    <nav>
      <NavLink
        to="/makeup-showroom"
        activeStyle={{ borderBottom: "0px solid" }}
      >
        <p className="title">MAKEUP SHOWROOM</p>
      </NavLink>
      <ul className="nav-links">
        <li>
          <Link to="/makeup-showroom/products">Products</Link>
        </li>
        <li>
          <Link to="/makeup-showroom/about">About</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
