import Product from "../product/Product";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Product name={product} />
      ))}
    </div>
  );
};

export default Products;
