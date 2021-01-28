import React from "react";
import Image from './Image'
import makeup_yellow_bg from './assets/makeup_yellow_bg.jpg'

export default function Home() {
  return (
    <div className="home-container">
      <h1 style={{marginBottom: '2rem'}}>Meet Makeup Showroom</h1>
      <div className="home-section">
        <p className="home-section__text">Browse through a variety of make-up cosmetics and find the best quality foundations, mascaras, shadows and lipsticks for everyday use.</p>
        <Image src={makeup_yellow_bg} name="makeup_yellow_bg" category="Makeup no-makeup" className="home-section__img" />
      </div>
    </div>
  );
}
