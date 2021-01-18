import React, { useState, useEffect } from "react";
import Image from "./Image";

export default function Products() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchItems();
    setItems([]);
  }, []);

  const fetchItems = async () => {
    try {
      const fetchedData = await fetch(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      );
      const items = await fetchedData.json();
      setItems(items);
      setIsLoading(false);
    } catch (e) {
      console.log("error:", e);
      setIsLoading(false);
    }
  };

  let getUniqueCategoryProducts = [
    ...new Map(items.map((item) => [item.product_type, item])).values()
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Products</h1>
      <div className="gallery">
        {isLoading && <h4>Loading products...</h4>}
        {getUniqueCategoryProducts.map((item) => (
          <Image
            name={item.name}
            src={item.image_link}
            category={item.product_type}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
