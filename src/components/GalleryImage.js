import React from "react";

export default function GalleryImage({ category, id, name, src }) {
  return (
    <figure className="gallery-item" key={id}>
      <img className="gallery-item__img" src={src} alt={name}></img>
      <figcaption className="gallery-item__img-caption">{category}</figcaption>
    </figure>
  );
}
