import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Product from "./Product";

const BestSellings = () => {
  const products = [
    {
      id: 1,
      name: "Leather Bag",
      price: 99.99,
      image: "/bedsheet.jpg",
    },
    {
      id: 2,
      name: "Canvas Tote",
      price: 49.99,
      image: "/bedsheet1.jpg",
    },
    { id: 3, name: "Backpack", price: 79.99, image: "/bedsheet-2.jpg" },
  ];

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-center">Best Selling Bags</h2>
        <div className="flex items-center">
          <button className="p-2">
            <IoIosArrowRoundBack size={24} />
          </button>
          <span className="mx-2">3/5</span>
          <button className="p-2">
            <IoIosArrowRoundForward size={24} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSellings;
