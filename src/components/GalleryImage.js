import React from "react";

const GalleryImage = ({ category, id, name, src }) => (
  <figure className="gallery-item" key={id}>
    <img className="gallery-item__img" src={src} alt={name}></img>
    <figcaption className="gallery-item__img-caption">{category}</figcaption>
  </figure>
);

export default GalleryImage;
