// import { useState } from "react";
import { useContext, useEffect } from "react";
import ProductList from "./ProductList";
// import CollectionFilter from "./CollectionFilter";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { StoreContext } from "../context/StoreContext";

const Collection = () => {
  // const [selectedFilter, setSelectedFilter] = useState("all");
  const { url } = useContext(StoreContext);

  const productsData = [
    {
      id: 1,
      name: "Classic Leather Bag",
      price: 150,
      image: "/bedsheet.jpg",
    },
    { id: 2, name: "Modern Tote Bag", price: 120, image: "/bedsheet1.jpg" },
    { id: 3, name: "Vintage Handbag", price: 200, image: "/bedsheet-2.jpg" },
    {
      id: 4,
      name: "New Arrival Satchel",
      price: 180,
      image: "/bedsheet-3.jpg",
    },
    { id: 5, name: "Stylish Backpack", price: 140, image: "/bedsheet-4.jpg" },
    {
      id: 6,
      name: "Vintage Backpack ",
      price: 140,
      image: "/bedsheet-5.jpg",
    },
  ];

  useEffect(() => {
    const getAllProducts = async () => {
      const newUrl = url + "/api/product";

      const response = await fetch(newUrl, {
        method: "get",
      });

      const responseData = await response.json();
      console.log(responseData);
    };
    getAllProducts();
  }, []);

  // const handleFilterChange = (event) => {
  //   setSelectedFilter(event.target.value);
  // };

  // const filteredProducts = productsData.filter((product) => {
  //   if (selectedFilter === "all") return true;
  //   if (selectedFilter === "new")
  //     return product.name.toLowerCase().includes("new");
  //   return false;
  // });

  return (
    <div className="container mx-auto p-4">
      {/* <CollectionFilter
        selectedFilter={selectedFilter}
        onFilterChange={handleFilterChange}
      /> */}
      <p>
        {" "}
        <span className="text-md md:text-2xl tracking-normal xl:tracking-widest lg:tracking-wide mb-4 ">
          All Collection
        </span>
      </p>
      <ProductList products={productsData} />
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
  );
};

export default Collection;
