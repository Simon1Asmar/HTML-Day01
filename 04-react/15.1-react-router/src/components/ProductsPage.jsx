import React from "react";

import { storeData as data } from "../store";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import { Outlet, useNavigate } from "react-router-dom";

function ProductsPage() {
  const [storeData, setStoreData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    setStoreData(data);
  }, []);

  return (
    <section>
      <h1>Products</h1>

      {storeData.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            navigate(`${item.id}`, { state: { item } });
          }}
        >
          {item.title}
        </button>
        // <Card key={index} title={item.title} imageUrl={item.imageUrl} price={item.price} size={item.size}/>
      ))}

      <Outlet/>
    </section>
  );
}

export default ProductsPage;
