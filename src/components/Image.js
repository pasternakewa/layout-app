import React from "react";

export default function Image({ title, elementNumber }) {
  return (
    <figure
      className={`app__categories__gallery--1__element--${elementNumber}`}
    >
      <img src={title} alt={title}></img>
    </figure>
  );
}
