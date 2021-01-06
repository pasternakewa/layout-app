import React from "react";
import { useState, useEffect } from "react";
import Image from "./Image";

export default function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
    return () => {
      setItems([]);
    };
  }, []);

  const fetchItems = async () => {
    const fetchedData = await fetch(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    const items = await fetchedData.json();
    setItems(items);
  };

  let uniqueItems = [
    ...new Map(items.map((item) => [item.product_type, item])).values()
  ];

  console.log("uniqueItems", uniqueItems);

  console.log("itemsstate", items);
  return (
    <div>
      <h1>Products</h1>
      <div className="gallery">
        {uniqueItems.map((item) => (
          <>
            <Image
              name={item.name}
              src={item.image_link}
              category={item.product_type}
            />
            {/* <p>{item.product_type}</p> */}
          </>
        ))}
      </div>
    </div>
  );
}
