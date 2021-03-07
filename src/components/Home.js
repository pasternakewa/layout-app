import React from "react";
import Image from "./Image";
import makeup_yellow_bg from "./assets/makeup_yellow_bg.jpg";
import makeup_red_bg from "./assets/makeup_red_bg.jpg";
import mix from "./assets/mix.jpg";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1 style={{ marginBottom: "2rem" }}>Meet Makeup Showroom</h1>
      <div className="home-section">
        <p className="home-section__text">
          Browse through a variety of make-up cosmetics and find the best
          quality foundations, mascaras, shadows and lipsticks for everyday use.
        </p>
        <NavLink to="/makeup-showroom/products">
          <Image
            src={makeup_yellow_bg}
            name="makeup_yellow_bg"
            category="Makeup no-makeup"
            className="home-section__img"
          />
        </NavLink>
        <p className="home-section__text">
          Wake up your creative soul and let yourself go crazy with makeup for
          an evening or a special occasion. Let only your imagination be the
          limit. Browse through a variety of make-up cosmetics for art.
        </p>
        <NavLink to="/makeup-showroom/products">
          <Image
            src={makeup_red_bg}
            name="makeup_red_bg"
            category="Makeup for special occasions"
            className="home-section__img"
          />
        </NavLink>
        <p className="home-section__text">
          Anything you wish is already here. Click below to browse all makeup
          products. You will find all categories of cosmetics made for sensitive
          skin, cruelty-free, without parabens alcohol, silicones, oils, vegan
          and in eco-friendly packaging.{" "}
        </p>
        <NavLink to="/makeup-showroom/products">
          <Image
            src={mix}
            name="mix"
            category="All makeup products"
            className="home-section__img"
          />
        </NavLink>
      </div>
    </div>
  );
}
