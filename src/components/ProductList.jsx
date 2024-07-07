/* eslint-disable react/prop-types */

import Product from "./Product";

const ProductList = ({ products }) => {
  return (
    <div className=" mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
