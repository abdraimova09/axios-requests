import React, { useEffect } from "react";
import ProductCard from "../Card/Card";

const List = ({ getProducts, products }) => {
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map(item => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
