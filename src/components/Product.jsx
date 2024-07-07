/* eslint-disable react/prop-types */
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
const Product = ({ product }) => {
  return (
    <div key={product.key} className="bg-gray-200  rounded-2xl">
      <div className="flex items-center justify-between p-4 md:pb-2 ">
        <div>
          <h2 className="text-xl ">{product.name}</h2>
        </div>
        <div className="flex gap-2 ">
          <button className="rounded-full bg-white p-2">
            <FaRegHeart />
          </button>

          <button className="rounded-full bg-white p-2">
            <HiOutlineShoppingBag />
          </button>
        </div>
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="  w-full h-[70%] md:h-[80%] m-auto"
      />
      <p className="text-gray-600 px-4 md:pb-4 mt-1">${product.price}</p>
    </div>
  );
};

export default Product;
