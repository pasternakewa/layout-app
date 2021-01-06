import React from "react";

export default function Image({ src, name, category }) {
  return (
    <figure className="gallery__elements-item">
      <img src={src} alt={name}></img>
      <figcaption>{category}</figcaption>
    </figure>
  );
}
