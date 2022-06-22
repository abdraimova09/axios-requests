import React, { useEffect } from "react";
import ProductCard from "../Card/Card";

const List = ({ getProducts, products, deleteProduct }) => {
  // console.log(products);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map(item => (
        <ProductCard key={item.id} item={item} deleteProduct={deleteProduct} />
      ))}
    </div>
  );
};

export default List;
