import React from "react";

import Product from "../product/Product";

const Products = ({ products }) => {
  const productsMapped = products.map((product) => <Product name={product} />);
  return <>{productsMapped}</>;
};

export default Products;
