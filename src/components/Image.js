import React from "react";

const Image = ({ src, name, className }) => (
  <div>
    <img src={src} alt={name} className={className} />
  </div>
);

export default Image;
